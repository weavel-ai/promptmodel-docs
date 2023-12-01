import { Background } from '../Background'
import { BlogArticles } from './BlogArticles'

export function Blog() {
  return (
    <main className="bg-transparent h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-start items-center pt-10">
      <Background />
      <BlogArticles />
    </main>
  )
}
