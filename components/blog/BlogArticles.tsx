import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'
import Image from 'next/image'
import { type Page } from 'nextra'
import { useMemo, useState } from 'react'
import classNames from 'classnames'

export const BlogArticles = ({ maxItems }: { maxItems?: number }) => {
  const [selectedTag, setSelectedTag] = useState(null)

  const firstPage = useMemo(
    () =>
      (getPagesUnderRoute('/blog') as Array<Page & { frontMatter: any }>)[0],
    []
  )

  const filteredPages = useMemo(
    () =>
      (getPagesUnderRoute('/blog') as Array<Page & { frontMatter: any }>)
        .slice(1, maxItems)
        .filter(page =>
          selectedTag == null ? true : page.frontMatter?.tag === selectedTag
        ),
    [selectedTag]
  )

  const allTags = useMemo(
    () =>
      (getPagesUnderRoute('/blog') as Array<Page & { frontMatter: any }>).map(
        page => page.frontMatter?.tag
      ),
    []
  )

  return (
    <div className="flex flex-col items-center justify-start gap-y-4">
      <Link
        key={firstPage.route}
        href={firstPage.route}
        className="mb-8 group w-full h-fit flex flex-row gap-x-8"
      >
        {firstPage.frontMatter?.ogImage ? (
          <div className="rounded-md relative aspect-[8/5] overflow-hidden w-1/2">
            <Image
              src="https://placehold.co/600x400/png"
              // src={firstPage.frontMatter.ogImage}
              className="object-cover transform group-hover:scale-105 transition-transform"
              alt={firstPage.frontMatter?.title ?? 'Blog post image'}
              fill={true}
            />
          </div>
        ) : null}
        <div className="flex flex-col items-start justify-center gap-y-4 w-1/2">
          {firstPage.frontMatter?.tag ? (
            <span className="opacity-80 text-sm py-1 px-2 rounded-full ring-1 ring-gray-300 group-hover:opacity-100">
              {firstPage.frontMatter.tag}
            </span>
          ) : null}
          <div className="block font-semibold my-2 text-4xl opacity-90 group-hover:opacity-100">
            {firstPage.meta?.title ||
              firstPage.frontMatter?.title ||
              firstPage.name}
          </div>
          <div className="opacity-80 mt-2 group-hover:opacity-100">
            {firstPage.frontMatter?.description}
          </div>
          <div className="flex gap-2 flex-row mt-3 items-baseline opacity-60 text-sm group-hover:opacity-100">
            {firstPage.frontMatter?.author ? (
              <span>{firstPage.frontMatter.author}</span>
            ) : null}
            <span>·</span>
            {firstPage.frontMatter?.date ? (
              <span>{firstPage.frontMatter.date}</span>
            ) : null}
          </div>
        </div>
      </Link>
      <div className="py-4 flex flex-row items-center justify-start gap-x-6 w-fit">
        <p className="text-3xl font-bold mr-2">Latest articles</p>
        <button
          className={classNames(
            'rounded-full ring-1 opacity-80 hover:opacity-100 py-1 px-3 transition-all',
            selectedTag == null
              ? 'bg-primary text-primary-content ring-primary'
              : 'ring-1 ring-primary-content'
          )}
          onClick={() => setSelectedTag(null)}
        >
          All categories
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={classNames(
              'rounded-full ring-1 opacity-80 hover:opacity-100 py-1 px-3 transition-all',
              selectedTag == tag
                ? 'bg-primary text-primary-content ring-primary'
                : 'ring-1 ring-primary-content'
            )}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredPages?.map(page => (
          <Link
            key={page.route}
            href={page.route}
            className="flex flex-col group"
          >
            {page.frontMatter?.ogImage ? (
              <div className="mt-4 rounded-md relative aspect-video overflow-hidden">
                <Image
                  src="https://placehold.co/600x400/png"
                  // src={page.frontMatter.ogImage}
                  className="object-cover transform group-hover:scale-105 transition-transform"
                  alt={page.frontMatter?.title ?? 'Blog post image'}
                  fill={true}
                />
              </div>
            ) : null}
            <span className="w-fit mt-4 opacity-80 text-sm py-1 px-2 rounded-full ring-1 ring-gray-300 group-hover:opacity-100">
              {firstPage.frontMatter.tag}
            </span>
            <div className="block font-semibold my-2 text-2xl opacity-90 group-hover:opacity-100">
              {page.meta?.title || page.frontMatter?.title || page.name}
            </div>
            <span className="transition-all opacity-80 group-hover:opacity-100 group-hover:text-secondary group-hover:font-semibold">
              Read more →
            </span>
            <div className="flex gap-2 flex-row mt-3 items-baseline opacity-60 text-sm group-hover:opacity-100">
              {firstPage.frontMatter?.author ? (
                <span>{firstPage.frontMatter.author}</span>
              ) : null}
              <span>·</span>
              {firstPage.frontMatter?.date ? (
                <span>{firstPage.frontMatter.date}</span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
