const path = require('path');
const webpack = require('webpack');
const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'i5.walmartimages.com',
      'localhost'
    ]
  },
  //^ This part is added to prevent img -> Image error, but not completed yet:
  publicRuntimeConfig: {
    MY_NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    MY_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    MY_NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
  },
  //^ This will allow Next.js to compile the SCSS files in your project:
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  //^ This code adds jQuery and Popper.js to the global scope, which is required by Bootstrap 5:
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
  ],
  optimizeFonts: false, // To enable google font usage
  //^ For static image sources:
  env: {
    about_portre: '/assets/about_portre.jpg',
    about_street: '/assets/about_street.jpg',
    contact_map: '/assets/contact_map.jpg',
    home_banner_1: '/assets/home_banner_1.jpg',
    logo_svg: '/assets/logo.svg',
  },
  //^ For translation:
  ...nextTranslate(),
};
