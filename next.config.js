/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://akmalhisyam.s3.ap-southeast-1.amazonaws.com'],
  },
  i18n,
});
