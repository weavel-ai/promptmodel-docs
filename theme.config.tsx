import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>PromptModel</span>,
  project: {
    link: "https://github.com/weavel-fastllm/fastllm",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/weavel-fastllm/fastllm",
  footer: {
    text: "PromptModel © 2023 by Weavel Inc.",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - PromptModel",
      };
    }
  },
};

export default config;
