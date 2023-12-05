import { CaretLeft } from '@phosphor-icons/react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Page } from 'nextra'
import { getPagesUnderRoute } from 'nextra/context'
import { useEffect, useMemo, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { Background } from '../Background'

export function BlogHeader() {
  const pathname = usePathname()
  const windowWidth = useWindowWidth()
  const [backButtonPosition, setBackButtonPosition] = useState<number | null>()

  useEffect(() => {
    if (!windowWidth) return
    if (windowWidth < 1280) return
    setBackButtonPosition(Math.max(10, windowWidth / 2 - 520))
  }, [windowWidth])

  const metadata = useMemo(() => {
    if (!pathname) return null
    const currentPage = getPagesUnderRoute('/blog').find(
      page => page.route === pathname
    ) as Page & { frontMatter: any }

    return currentPage?.frontMatter
  }, [pathname])

  return (
    <>
      <Background className="from-base-200" />
      <div className="flex flex-col items-center mt-10 mb-4">
        {metadata.tag && (
          <span className="opacity-80 text-sm py-1 px-2 rounded-full ring-1 ring-gray-300">
            {metadata.tag}
          </span>
        )}
        <p className="font-semibold my-4 text-4xl opacity-90">
          {metadata?.title}
        </p>
        <p className="text-muted-content font-medium text-xl mt-2 mb-4">
          {metadata?.description}
        </p>
        <p className="text-muted-content opacity-90">
          {metadata?.date} · {metadata?.author}
        </p>
      </div>
      <Link
        href="/blog"
        className={classNames(
          'fixed top-20 pl-1 hover:pl-0',
          'flex-row gap-x-1 items-center transition-all !no-underline',
          'opacity-80 hover:opacity-100 hover:gap-x-2',
          'hidden xl:flex'
        )}
        style={{
          left: `${backButtonPosition}px`
        }}
      >
        <CaretLeft size={20} />
        <span>Back</span>
      </Link>
    </>
  )
}
