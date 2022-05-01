/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: '_next',
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: (fileName, options) => options.query.type || 'scoped',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
