import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: PostMeta;
};

export default function ListItem({ post }: Props) {
  const { slug, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="flex items-baseline justify-between gap-4">
      <Link
        href={`/thoughts/${slug}`}
        className="text-neutral-300 hover:text-white transition-colors duration-150"
      >
        {title}
      </Link>
      <span className="text-neutral-500 text-sm shrink-0">{formattedDate}</span>
    </li>
  );
}
