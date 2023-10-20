import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { MainContentWrapper } from "./components/MainContentWrapper";
import { Logo } from "./components/Logo";
import { RequestAccessButton } from "./components/home/RequestAccessButton";

const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: "https://github.com/weavel-ai/promptmodel",
  // },
  navbar: {
    extraContent: (
      <>
        <RequestAccessButton small />
      </>
    ),
  },
  chat: {
    link: "https://discord.gg/dVTtyEU4",
  },
  head: (
    <>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/promptmodel-favicon.png"
      />
    </>
  ),
  feedback: {
    content: null,
  },
  main: MainContentWrapper,
  // docsRepositoryBase: "https://github.com/weavel-ai/promptmodel",
  footer: {
    text: "PromptModel © 2023 by Weavel",
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
