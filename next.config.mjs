/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: {
                not: [...fileLoaderRule.resourceQuery.not, /url/],
            }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
        },
    )
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
},
images: {
    remotePatterns: [
        {
          protocol: 'http',
          hostname: '81.200.153.83',
          pathname: '/images_mock/**', // Add the path if needed
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com', // Ensure you allow this domain if you're using Unsplash
          pathname: '/**',
        },
    ],
  }

}

export default nextConfig
