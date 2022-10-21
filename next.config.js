/** @type {import('next').NextConfig} */
const path = require('node:path');
const loaderUtils = require('loader-utils');

const nextConfig = {
  webpack(config, { dev }) {
    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === 'object')
      .oneOf.filter(rule => Array.isArray(rule.use));
    if (!dev) {
      rules.forEach(rule => {
        rule.use.forEach(moduleLoader => {
          if (
            moduleLoader.loader?.includes('css-loader') &&
            !moduleLoader.loader?.includes('postcss-loader')
          ) {
            moduleLoader.options.modules.getLocalIdent = (
              context,
              _,
              exportName,
            ) => {
              loaderUtils
                .getHashDigest(
                  Buffer.from(
                    `filePath:${path
                      .relative(context.rootContext, context.resourcePath)
                      .replace(/\\+/g, '/')}#className:${exportName}`,
                  ),
                  'md5',
                  'base64',
                  7,
                )
                .replace(/^(-?\d|--|\S)/, '_$1');
            };
          }
        });
      });
    }
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
