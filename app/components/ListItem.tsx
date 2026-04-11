import Link from "next/link";
import { PostMeta } from "@/lib/posts";

type Props = {
  post: PostMeta;
};

export default function ListItem({ post }: Props) {
  const { slug, title } = post;

  return (
    <li>
      <Link
        href={`/thoughts/${slug}`}
        className="text-neutral-300 hover:text-white transition-colors duration-150"
      >
        {title}
      </Link>
    </li>
  );
}
