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
      <div className="">
        <article className="py-2 text-dark">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <h1 className="my-2 fs-3">{post.title}</h1>
              <p className="text-neutral-500 text-sm mb-6">{formattedDate}</p>

            </div>
           
          </div>
          
          <div
            className="prose-content text-neutral-300"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>


      </div>
    </section>
  );
}
