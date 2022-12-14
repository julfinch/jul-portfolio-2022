/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jul Danreb Lactao`,
    description: `React Portfolio Website of Jul Danreb Lactao`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: "gatsby-plugin-less",
    options: {
      javascriptEnabled: true,
    },
  },
    `gatsby-plugin-less`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        loaderOptions: {
          appendData: `@env: ${process.env.NODE_ENV};`,
        },
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#00BFA6",
        },
      },
    },
  ],
}
