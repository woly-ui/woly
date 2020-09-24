module.exports = {
  siteMetadata: {
    siteUrl: `https://woly-ui.github.io/woly/`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-woly`,
      options: { components: `src` },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
};
