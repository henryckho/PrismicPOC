/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    /*
   * Gatsby's data processing layer begins with “source”
   * plugins. Here the site sources its data from prismic.io.
   */
  {
    resolve: 'gatsby-source-prismic',
    options: {
      // The name of your prismic.io repository. This is required.
      // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
      // is 'gatsby-source-prismic-test-site.prismic.io'.
      repositoryName: 'henrygatsbypoc',

      // An API access token to your prismic.io repository. This is optional.
      // You can generate an access token in the "API & Security" section of
      // your repository settings. Setting a "Callback URL" is not necessary.
      // The token will be listed under "Permanent access tokens".
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      schemas: {
        home: require("./src/schemas/home.json"),
      },
    },
  }
  ],
}
