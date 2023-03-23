/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// This part is added to prevent img -> Image error, but not completed yet.
module.exports = {
  publicRuntimeConfig: {
    // Add your environment variables here
    MY_NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    MY_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    MY_NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  },
};
