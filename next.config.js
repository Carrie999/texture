const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  distDir: 'docs',
  assetPrefix: isProd ? '/texture/' : undefined,
  webpack(config) {
    config.module.rules.push({test: /\.svg$/i,issuer: /\.[jt]sx?$/,use: ['@svgr/webpack']})
    return config
  }
}

module.exports = nextConfig
