import { getSortedPostsData, getPostData } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: post.title,
    description: `${post.title} — by Sai Srikanth`,
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostData(slug);
  const formattedDate = getFormattedDate(post.date);

  return (
    <section>
      <div className="pb-7 sm:py-2">
        <article className="py-2 text-neutral-300">
          <h1 className="text-xl font-semibold text-white mb-1">{post.title}</h1>
          <p className="text-neutral-500 text-sm mb-6">{formattedDate}</p>

          <div
            className="prose-content text-neutral-300"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        <div className="py-4 text-neutral-400">
          <Link href="/thoughts" className="hover:text-white transition-colors duration-150">
            ← Back
          </Link>
        </div>
      </div>
    </section>
  );
}
