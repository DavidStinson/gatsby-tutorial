/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A website on the internet`,
    author: `David Stinson`,
    description: `Describe your site here`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Raleway']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gnotes`,
        path: `${__dirname}/src/data/posts/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
