const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://lio.vn" : `https://${stage}.lio.vn`,
  console: stage === "production" ? "https://lio.vn/app" : `https://${stage}.lio.vn/app`,
  email: "info@erpcloud.vn",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/itgisgroup/lio",
  discord: "https://zalo.me/0909099580",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
