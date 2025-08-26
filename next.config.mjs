// next.config.mjs
import withPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === 'development'

const baseConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

const nextConfig = withPWA({
  dest: 'public',
  disable: isDev,
})(baseConfig)

export default nextConfig