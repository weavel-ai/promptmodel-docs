'use client'

import classNames from 'classnames'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const RequestDemoButton = ({ small = false }: { small?: boolean }) => {
  const { theme } = useTheme()

  const [colorScheme, setColorScheme] = useState(null)

  useEffect(() => {
    const htmlElement = document.documentElement
    const computedStyle = getComputedStyle(htmlElement)
    const scheme = computedStyle.getPropertyValue('color-scheme').trim()
    setColorScheme(scheme)
  }, [])

  useEffect(() => {
    setColorScheme(theme)
  }, [theme])

  return (
    <Link
      href="https://calendly.com/sounhochung/30min"
      target="_blank"
      className={classNames(
        'btn btn-sm rounded-lg normal-case border-primary border-2 hover:border-none',
        'bg-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:to-primary',
        'transition-all hover:shadow-2xl shadow-secondary outline-none',
        'scale-[85%] sm:scale-100',
        small
          ? 'h-12 w-36 hidden sm:flex'
          : 'h-16 w-56 mt-4 text-xl text-base-content',
        small && (colorScheme === 'dark' ? 'text-[#f2f2f2]' : 'text-[#121921]')
      )}
    >
      Request Demo
    </Link>
  )
}
