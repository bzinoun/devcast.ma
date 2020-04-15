module.exports = {
  plugins: [
    'gatsby-plugin-mailchimp',
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/mailchimp.js',
      },
    },
    {
      resolve: 'gatsby-theme-anchor',
      options: {
        anchorRss: 'https://anchor.fm/s/127a53ac/podcast/rss',
        path: __dirname,
      },
    },
  ],
};
