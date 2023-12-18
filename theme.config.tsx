import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { Logo } from './components/Logo'
import { GetStartedButton } from './components/buttons/GetStartedButton'
import Link from 'next/link'

const footerNav = [
  { name: 'Contact', href: 'mailto:hello@promptmodel.run' },
  {
    name: 'Schedule Demo',
    href: '/docs/schedule-demo'
  },
  { name: 'Careers', href: '/careers' }
]

const footerLegalNav = [
  // {
  //   name: 'Terms',
  //   href: '/terms-of-service'
  // },
  {
    name: 'Privacy',
    href: '/privacy-policy'
  }
]

const config: DocsThemeConfig = {
  logo: <Logo />,
  // project: {
  //   link: "https://github.com/weavel-ai/promptmodel",
  // },
  navbar: {
    extraContent: (
      <>
        <GetStartedButton small />
      </>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  chat: {
    link: 'https://www.promptmodel.run/discord'
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter, title: pageTitle } = useConfig()
    const url =
      'https://promptmodel.run' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    const description = frontMatter.description ?? ''

    const title = frontMatter.title ?? pageTitle

    const section = asPath.startsWith('/docs')
      ? 'Docs'
      : asPath.startsWith('/blog/')
      ? 'Blog'
      : ''

    const image =
      frontMatter.ogImage && 'https://promptmodel.run' + frontMatter.ogImage

    return (
      <>
        <meta name="theme-color" content="#000" />
        <meta property="og:url" content={url} />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="promptmodel.run" />
        <meta name="twitter:url" content="https://promptmodel.run" />

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/promptmodel-favicon.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
      </>
    )
  },
  feedback: {
    content: null
  },
  docsRepositoryBase: 'https://github.com/weavel-ai/promptmodel-docs',
  footer: {
    text: (
      <div className="flex md:justify-between md:flex-row flex-col items-center flex-1 flex-wrap gap-2 text-sm">
        <div className="md:order-last flex flex-col lg:flex-row gap-y-1 gap-x-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {footerNav.map(nav => (
              <Link
                key={nav.name}
                href={nav.href}
                className="inline rounded-none leading-6 transition-all text-base-content hover:text-primary whitespace-nowrap"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {footerLegalNav.map(nav => (
              <Link
                key={nav.name}
                href={nav.href}
                className="inline rounded-none leading-6 text-base-content hover:text-primary whitespace-nowrap"
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <span className="text-base-content">
          PromptModel © {new Date().getFullYear()} Weavel, Inc.
        </span>
      </div>
    )
  },
  useNextSeoProps() {
    const { pathname } = useRouter()
    let titleTemplate: string
    if (pathname == '/') {
      titleTemplate = 'Promptmodel'
    } else if (pathname.startsWith('/blog')) {
      if (pathname == '/blog') {
        titleTemplate = 'PromptModel Blog'
      } else {
        titleTemplate = '%s - PromptModel Blog'
      }
    } else {
      titleTemplate = '%s - PromptModel'
    }
    return {
      titleTemplate: titleTemplate
    }
  }
}

export default config
