module.exports = {
  siteMetadata: {
    siteUrl: `https://woly-ui.github.io/woly/`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-woly`,
      options: { components: `src` },
    },
  ],
};
