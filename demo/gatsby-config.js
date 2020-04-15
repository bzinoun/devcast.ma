module.exports = {
  plugins: [
    'gatsby-plugin-mailchimp',
    {
      resolve: 'gatsby-theme-anchor',
      options: {
        anchorRss: 'https://anchor.fm/s/127a53ac/podcast/rss',
        path: __dirname,
      },
    },
  ],
};
