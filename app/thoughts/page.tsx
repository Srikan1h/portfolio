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
      <div className="py-3">
        <ul className="p-0 m-0">
          {posts.map((post) => (
            <ListItem key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
