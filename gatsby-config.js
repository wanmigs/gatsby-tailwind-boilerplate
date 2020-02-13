/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `FligBook`,
    description: `Fligno Documentation`,
    author: `wanmigs@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
