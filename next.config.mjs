/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        NEXT_PUBLIC_ENV_VARIABLE: process.env.NEXT_PUBLIC_ENV_VARIABLE || 'defaultapikey',
    }
};

export default nextConfig;
