import { getSortedPostsData } from "@/lib/posts";
import ListItem from "../components/ListItem";

export const metadata = {
  title: "Thoughts",
  description: "Writing by Sai Srikanth — ideas, observations, and reflections.",
};

export default function ThoughtsPage() {
  const posts = getSortedPostsData();

  return (
    <section>
      <div className="pb-7 sm:py-2">
        <article className="py-2 text-neutral-300">
          <p>Writing.</p>
        </article>

        <ul className="grid grid-flow-row auto-rows-max text-neutral-400 py-5 gap-3">
          {posts.map((post) => (
            <ListItem key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
