/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  // laat Netlify-plugin z’n werk doen; geen experimental rommel hier
};
module.exports = nextConfig;
