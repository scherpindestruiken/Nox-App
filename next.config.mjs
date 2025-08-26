/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Alleen deze twee zijn toegestaan
  },
};

export default nextConfig;