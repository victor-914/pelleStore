/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "https://picsum.photos",
      "https://istockphoto.com",
      "www.instagram.com",
      "https://pellestore-new-strapi.onrender.com",
    ],
  },
  future: { webpack5: true },
  // swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
