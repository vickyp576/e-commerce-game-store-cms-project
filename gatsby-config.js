require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken:
          process.env.DATO_READONLY_API_KEY ||   '4fbce78c151720bea6810a5a686404', // '1b2fe1bfc8abf2e08343a75e444b4d',
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        publicApiKey:
          process.env.SNIPCART_PUBLIC_API_KEY ||
          '4fbce78c151720bea6810a5a686404',
          //'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1',
        autopop: true,
      },
    },
  ],
};
