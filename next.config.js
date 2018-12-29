const withPlugins = require('next-compose-plugins');
const typescript = require('@zeit/next-typescript');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withSass = require('@zeit/next-sass');

dotenvLoad();

const nextConfig = {};
const sassConfig = withSass();

module.exports = withPlugins(
  [
    nextEnv({
      staticPrefix: 'CUSTOM_STATIC_',
      publicPrefix: 'CUSTOM_PUBLIC_'
    }),

    // another plugin with a configuration
    [ typescript ]
  ],
  sassConfig,
  nextConfig
);
