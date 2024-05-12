# Blog Starter Pack

This repo is built off of [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) by Vercel which provides a fantastic starting structure for a markdown based blog. This blog starter pack uses Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature and the blog posts are stored in `/_posts` as Markdown files. Adding a new Markdown file in there will create a new blog post!

The two core design constraints I have in a blogging site:
1. Easy to add blog posts
2. Easy to change to whatever aesthetic style I am feeling that month

To do so I have attempted to condense the necessary components into two main files that you can control easily using an LLM:
1. `/src/app/page.tsx` which is the home page and root
2. `/posts/[slug]/page.tsx` which is the blog page
The styles for both of these are defined almost entirely inline using tailwind, with the exception that some high level css properties are defined in `/src/app/globals.css`

## How To Use

```bash
git clone <TODO:URL>
yarn install
yarn run dev
```

## How to Make It Your Own

- [ ] Fork or Clone Into Your Own Repo
- [ ] Modify `BLOG_NAME` and `AUTHOR` in `/src/lib/constants.ts`
- [ ] Modify `primary-color` in `/src/app/globals.css`
- [ ] Add a markdown file to `/_posts` following the header format as seen in `/_posts/sample.md`
- [ ] Replace website icon located at `/public/favicon/favicon.ico`

### How to Modify Home Page Using ChatGPT




## ToDo
- [x] Initial Repo
- [ ] Guide for modifying home page
- [ ] Guide for modifying blog page
- [ ] Route to add new blog post
- [ ] Use Tailwind correctly 😆