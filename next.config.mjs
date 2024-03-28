/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Update the hostname
        port: "",
        pathname: "/**", // Allow any path on images.unsplash.com
      },
    ],
  },
};

export default nextConfig;
