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



<div className="d-flex mx-auto me-auto">
  <div className="me-auto ">
    <Link
        href={`/thoughts/${slug}`}
        className=""
      >
        {title}
      </Link>
  </div>
  <div className="p-2">
    <span className="">{formattedDate}</span>
  </div>
</div>



  );
}
