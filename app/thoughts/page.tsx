import { getSortedPostsData, PostMeta } from "@/lib/posts";
import ListItem from "../components/ListItem";

export const metadata = {
  title: "Thoughts",
  description: "Writing by Sai Srikanth — ideas, observations, and reflections.",
};

export default function ThoughtsPage() {
  const posts = getSortedPostsData();

  // Group posts by year
  const groupedPosts: Record<string, PostMeta[]> = {};
  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }
    groupedPosts[year].push(post);
  });

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <section>
      <div className="py-3">
        <ul className="p-0 m-0">
          {sortedYears.map((year) =>
            groupedPosts[year].map((post, index) => (
              <ListItem
                key={post.slug}
                post={post}
                year={index === 0 ? year : undefined}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
