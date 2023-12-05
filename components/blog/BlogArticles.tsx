import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'
import Image from 'next/image'
import { type Page } from 'nextra'
import { useMemo, useState } from 'react'
import classNames from 'classnames'
import { SelectTab } from '../SelectTab'

export const BlogArticles = ({ maxItems }: { maxItems?: number }) => {
  const [selectedTag, setSelectedTag] = useState('All')

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
          selectedTag == 'All' ? true : page.frontMatter?.tag === selectedTag
        ),
    [selectedTag]
  )

  const allTags = useMemo(() => {
    const tags = (
      getPagesUnderRoute('/blog') as Array<Page & { frontMatter: any }>
    )
      .map(page => page.frontMatter?.tag)
      .filter(Boolean)
    tags.unshift('All')
    return tags
  }, [])

  return (
    <div className="flex flex-col items-center justify-start gap-y-4">
      <Link
        href={firstPage.route}
        className="mb-8 w-fit h-fit !no-underline group"
      >
        <div className="w-full h-fit flex flex-col xl:flex-row gap-8">
          {firstPage.frontMatter?.ogImage ? (
            <div className="rounded-3xl relative aspect-[8/5] overflow-hidden xl:w-1/2 transition-all group-hover:rounded-md">
              <Image
                src="https://placehold.co/600x400/png"
                // src={firstPage.frontMatter.ogImage}
                className="object-cover"
                alt={firstPage.frontMatter?.title ?? 'Blog post image'}
                fill={true}
              />
            </div>
          ) : null}
          <div className="flex flex-col items-start justify-center gap-y-4 xl:w-1/2">
            {firstPage.frontMatter?.tag ? (
              <span className="opacity-80 text-sm py-1 px-2 rounded-full ring-1 ring-gray-300">
                {firstPage.frontMatter.tag}
              </span>
            ) : null}
            <p className="font-semibold my-2 text-4xl opacity-90">
              {firstPage.frontMatter?.title}
            </p>
            <p className="opacity-80 mt-2">
              {firstPage.frontMatter?.description}
            </p>
            <div className="flex gap-2 flex-row mt-3 items-baseline opacity-60 text-sm">
              {firstPage.frontMatter?.author ? (
                <span>{firstPage.frontMatter.author}</span>
              ) : null}
              <span>·</span>
              {firstPage.frontMatter?.date ? (
                <span>{firstPage.frontMatter.date}</span>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
      <SelectTab
        tabs={allTags}
        selectedTab={selectedTag}
        onSelect={setSelectedTag}
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full h-full">
        {filteredPages?.map(page => (
          <Link
            key={page.route}
            href={page.route}
            className="flex flex-col group !no-underline"
          >
            <div className="rounded-3xl overflow-hidden relative aspect-video transition-all group-hover:rounded-md">
              <Image
                src="https://placehold.co/600x400/png"
                // src={page.frontMatter.ogImage}
                className="object-cover"
                alt={page.frontMatter?.title ?? 'Blog post image'}
                fill={true}
              />
            </div>
            {page.frontMatter.tag && (
              <span className="w-fit mt-4 opacity-80 text-sm py-1 px-2 rounded-full ring-1 ring-gray-300 group-hover:opacity-100 transition-opacity">
                {page.frontMatter.tag}
              </span>
            )}
            <div className="block font-semibold my-2 text-2xl opacity-90 group-hover:opacity-100 transition-opacity">
              {page.meta?.title || page.frontMatter?.title || page.name}
            </div>
            <span className="transition-all opacity-80 group-hover:opacity-100 group-hover:text-secondary group-hover:font-semibold">
              Read more →
            </span>
            <div className="flex gap-2 flex-row mt-3 items-baseline opacity-60 text-sm">
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
