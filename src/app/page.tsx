import Container from "@/app/_components/container";
import { BLOG_NAME } from "@/lib/constants";
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import DateFormatter from "@/app/_components/date-formatter";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}

type MoreStoriesProps = {
  posts: Post[];
};

export function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: PostPreviewProps) {
  return (
    <Link href={`/posts/${slug}`} passHref className="box">
        <h3 className="text-3xl mb-3 leading-snug primary-color">
          {title}
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </Link>
  );
}


export function Intro() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center text-center mt-16 mb-16 md:mb-12 primary-color">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
      {BLOG_NAME}
      </h1>
    </section>
  );
}