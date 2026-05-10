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



<li className="py-2 list-unstyled">
  <div className="d-flex">
  <div className="flex-grow-1">
    <Link
        href={`/thoughts/${slug}`}
        className=""
      >
        {title}
      </Link>
  </div>
  <div className="">
        <span className="">{formattedDate}</span>

  </div>
</div>






  </li>




  );
}
