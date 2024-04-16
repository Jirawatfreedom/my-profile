const URL = process.env.NEXT_PUBLIC_HOSTNAME
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSiteMaps: [`${URL}/sitemap.xml`],
  },
}
