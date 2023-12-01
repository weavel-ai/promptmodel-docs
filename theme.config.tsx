import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Logo } from './components/Logo'
import { RequestDemoButton } from './components/home/RequestDemoButton'

const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: "https://github.com/weavel-ai/promptmodel",
  // },
  navbar: {
    extraContent: (
      <>
        <RequestDemoButton small />
      </>
    )
  },
  chat: {
    link: 'https://discord.gg/2Y36M36tZf'
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
    content: null
  },
  // docsRepositoryBase: "https://github.com/weavel-ai/promptmodel",
  footer: {
    text: 'PromptModel © 2023 by Weavel'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - PromptModel'
      }
    }
  }
}

export default config
