import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
const nextConfig = withNextra({
  // basePath: "/docs",
  images: {
    domains: ['placehold.co']
  },
  rewrites: async () => [
    {
      source: '/discord',
      destination: 'https://discord.gg/2Y36M36tZf'
    }
  ],
  transpilePackages: ['react-syntax-highlighter']
})

export default nextConfig
