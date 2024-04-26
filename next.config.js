/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: '/?portfolio',
                permanent: true,
            },
        ]
    },
    // basePath: "/my-portfolio", // <=== github pages domain requirement
    output: "export",  // <=== enables static exports
    reactStrictMode: false,
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
