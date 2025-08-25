
import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = withPWA({
  dest: 'public',
  disable: isDev,
})({
  reactStrictMode: true,
});

export default nextConfig;