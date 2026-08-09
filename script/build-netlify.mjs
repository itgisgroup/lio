import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { execFileSync } from "node:child_process"

const root = resolve(import.meta.dirname, "..")
const docsDir = resolve(root, "packages/web")
const websiteDir = resolve(root, "apps/website")
const docsDist = resolve(docsDir, "dist")
const docsStaging = resolve(root, ".netlify-docs")
const websiteDist = resolve(websiteDir, "dist")

const run = (cwd, args, env = {}) => {
  execFileSync("bun", args, {
    cwd,
    env: { ...process.env, ...env },
    stdio: "inherit",
  })
}

rmSync(docsStaging, { recursive: true, force: true })
run(docsDir, ["run", "build"], { NETLIFY_BUILD: "true" })
cpSync(docsDist, docsStaging, { recursive: true })

run(websiteDir, ["run", "build"])
const publishedDocs = resolve(websiteDist, "docs")
rmSync(publishedDocs, { recursive: true, force: true })
mkdirSync(publishedDocs, { recursive: true })
cpSync(docsStaging, publishedDocs, { recursive: true })

writeFileSync(
  resolve(websiteDist, "_redirects"),
  "/doc        /docs        301\n/doc/*      /docs/:splat 301\n/*          /index.html  200\n",
)

console.log(`Netlify bundle ready: ${websiteDist}`)
