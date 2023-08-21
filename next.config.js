/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "cdn.shopclues.com",
			},
			{
				hostname: "hips.hearstapps.com",
			},
			{
				hostname: "images.immediate.co.uk",
			},
			{
				hostname: "images.unsplash.com",
			},
			{
				hostname: "",
			},
			{
				hostname: "",
			},
		],
	},
};

module.exports = nextConfig;
