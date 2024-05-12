import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { BLOG_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import DateFormatter from "@/app/_components/date-formatter";
import { type Author } from "@/interfaces/author";
import { ReactNode } from "react";
import markdownStyles from "@/app/_components/markdown-styles.module.css";
import Link from "next/link";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${BLOG_NAME} Post`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};


export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <div className="text-center mb-4">
        <PostTitle>{title}</PostTitle>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        {/* Horizontal rule as a separator, styled with primary color */}
        <hr className="border-t primary-color mx-auto w-full max-w-2xl my-4" />
      </div>
    </>
  );
}

type PropsPostTitle = {
  children?: ReactNode;
};

export function PostTitle({ children }: PropsPostTitle) {
  return (
    <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight mb-4 text-center">
      {children}
    </h1>
  );
}


type PostBodyProps = {
  content: string;
};

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-3xl lg:max-w-4xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 primary-color">
      <Link href="/" className="hover:underline">
        {BLOG_NAME}
      </Link>
    </h2>
  );
};