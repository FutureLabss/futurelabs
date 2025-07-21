/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://futurelabs.ng", // ✅ or your custom domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/404", "/_not-found"], // Optional
  sitemapSize: 7000,
};
