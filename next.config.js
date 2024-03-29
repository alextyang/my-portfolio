/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/my-portfolio", // <=== github pages domain requirement
    output: "export",  // <=== enables static exports
    reactStrictMode: false,
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
