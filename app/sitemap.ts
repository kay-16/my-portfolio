import { getProjectPosts } from 'app/projects/utils'

export const baseUrl = 'https://kylareambonanza.vercel.app'

export default async function sitemap() {
  let projectPosts = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/projects', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projectPosts]
}