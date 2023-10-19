import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  // basePath: "/docs",
  transpilePackages: ["react-syntax-highlighter"],
});
