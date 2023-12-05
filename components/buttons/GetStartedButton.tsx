'use client'

import classNames from 'classnames'
import Link from 'next/link'

export const GetStartedButton = ({ small = false }: { small?: boolean }) => {
  return (
    <Link
      href="https://app.promptmodel.run?utm_source=homepage&utm_medium=button&utm_content=claim-access"
      className={classNames(
        'btn btn-sm rounded-lg normal-case border-primary border-2 hover:border-none',
        'bg-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:to-primary',
        'transition-all hover:shadow-2xl shadow-secondary outline-none',
        'scale-[85%] sm:scale-100',
        small
          ? 'h-12 w-36 hidden sm:flex'
          : 'h-16 w-56 mt-4 text-xl text-base-content'
      )}
    >
      Get started
    </Link>
  )
}
