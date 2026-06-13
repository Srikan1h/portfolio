import Link from "next/link";
import { PostMeta } from "@/lib/posts";

type Props = {
  post: PostMeta;
  year?: string;
};

export default function ListItem({ post, year }: Props) {
  const { slug, title } = post;

  return (
    <li className="list-unstyled pb-3">
      <div className="d-flex align-items-baseline">
        <div className="text-secondary opacity-75" style={{ width: '4.5rem', flexShrink: 0 }}>
          {year ? year : ""}
        </div>
        <div className="flex-grow-1">
          <Link
            href={`/thoughts/${slug}`}
            className="link-dark link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover"
          >
            {title}
          </Link>
        </div>
      </div>
    </li>
  );
}
