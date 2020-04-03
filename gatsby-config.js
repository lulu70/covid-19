module.exports = {
  siteMetadata: {
    title: `Covid 19`,
    subTitle: `state of recovery`,
    description: `covid 19 state of recovery presented on an interactive map`,
    author: `Lior cohen`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161489342-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/components/PagesWrapper.js`),
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `covid-19-state-of-recovery`,
        short_name: `covid-19`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
