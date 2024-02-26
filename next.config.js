/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/my-portfolio",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
