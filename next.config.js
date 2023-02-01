const { NextFederationPlugin } = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app-caeq',
        filename: 'static/chunks/app-ceaq.js',
        remotes: {
          core: 'core@http://localhost:8000/core.js',
          'design-system': `design_system@http://localhost:8001/_next/static/${isServer ? 'ssr' : 'chunks'}/design-system.js`
        },
      }),
    )

    return config
  }
}

module.exports = nextConfig
