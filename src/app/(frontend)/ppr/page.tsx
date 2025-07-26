/* /components/Home.js */

import { Suspense } from 'react'

export const experimental_ppr = true

function LoadingPosts() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`
  return (
    <div className="col-span-4 space-y-4 lg:col-span-1 min-h-screen w-full mt-20">
      <div className={`relative h-[167px] rounded-xl bg-gray-900 ${shimmer}`} />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-6 w-1/3 rounded-lg bg-gray-900" />
      <div className="h-4 w-full rounded-lg bg-gray-900" />
      <div className="h-4 w-4/6 rounded-lg bg-gray-900" />
    </div>
  )
}

async function Posts() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: 'no-store',
  })
  const posts = await data.json()
  return (
    <>
      <h2 className="mb-3 mt-8 font-bold text-2xl">All Posts</h2>
      {posts.slice(0, 7).map((post: any) => (
        <div key={post.id} className="mb-5">
          <h4 className="text-lg">Title: {post.title}</h4>
          <p className="text-sm">Content: {post.body}</p>
        </div>
      ))}
    </>
  )
}

export default function Home() {
  return (
    <>
      <div>
        <h2 className="mb-3 font-bold text-2xl">Partial Pre-Rendering</h2>
        <p>
          Morbi eu ullamcorper urna, a condimentum massa. In fermentum ante non turpis cursus
          fringilla. Praesent neque eros, gravida vel ante sed, vehicula elementum orci. Sed eu
          ipsum eget enim mattis mollis. Morbi eu ullamcorper urna, a condimentum massa. In
          fermentum ante non turpis cursus fringilla. Praesent neque eros, gravida vel ante sed,
          vehicula elementum orci. Sed eu ipsum eget enim mattis mollis.
        </p>
      </div>
      <Suspense fallback={<LoadingPosts />}>
        <Posts />
      </Suspense>
    </>
  )
}
