import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'alessandro/ — dev blog',
    description: 'dev blog of a cs student',
    site: context.site,
    items: blog
      .filter(p => !p.data.draft)
      .sort((a,b) => (b.data.date?.valueOf()||0) - (a.data.date?.valueOf()||0))
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date || new Date(),
        description: post.data.description || "",
        link: `/blog/${post.id}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
