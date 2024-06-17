/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: process.env.BASE_URL || '', // added for github actions to work
};

export default nextConfig;