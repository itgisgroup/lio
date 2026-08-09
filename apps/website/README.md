# Lio website

Marketing site for Lio, the ERP-aware AI Agent ecosystem. LioDev is the developer product within Lio; ERPCloud is the enterprise platform behind it.

The marketing site and Starlight documentation live in the same `lio` repository and are deployed behind one public domain. During local development, run the docs server on `4321`; the Vite site proxies `/docs` and `/doc` through `5173`.

```bash
bun install
bun run --cwd apps/website dev
bun run --cwd apps/website build
```
