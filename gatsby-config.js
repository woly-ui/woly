module.exports = {
  siteMetadata: {
    siteUrl: `https://woly.sova.dev/`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-woly`,
      options: {
        components: `src`,
        examplesGlobalImports: {
          'dev/playground': {
            namedImports: [
              { name: 'block', value: 'block' },
              { name: 'Playground', value: 'Playground' },
            ],
          },
        },
      },
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
