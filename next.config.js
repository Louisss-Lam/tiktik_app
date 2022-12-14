/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "play-lh.googleusercontent.com",
      'cdn.pixabay.com',
      'p16-amd-va.tiktokcdn.com',
      'image.shutterstock.com',
      'lh3.googleusercontent.com'
    ],
  }
}

module.exports = nextConfig
