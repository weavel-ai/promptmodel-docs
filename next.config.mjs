import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

export default withNextra({
  // basePath: "/docs",
  images: {
    domains: ['placehold.co']
  },
  transpilePackages: ['react-syntax-highlighter']
})
