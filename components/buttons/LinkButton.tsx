import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  title: string
  prefix?: ReactNode
  suffix?: ReactNode
  target?: string
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.href}
      className={classNames(
        'btn btn-outline btn-secondary outline-none normal-case w-fit group',
        'flex flex-row items-center justify-center gap-x-2 my-4'
      )}
      target={props?.target ?? '_blank'}
    >
      {props.prefix}
      <p className="group-hover:text-base-100">{props.title}</p>
      {props.suffix}
    </Link>
  )
}
