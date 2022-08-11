/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    apiPublicUrl: 'http://localhost:1338/api',
    apiImagenURL: 'http://localhost:1338/api/products?populate[img][populate][0]=attributes',
    imagenURL: 'http://localhost:1338/api/products?populate=img',
    apiLocalHost: 'http://localhost:1338/',
  },
  images: {
    diveceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    domains: ['http://localhost:1338/api/products?populate=img'],
    path: '/_next/image',
    loader: 'default',
  },
}
