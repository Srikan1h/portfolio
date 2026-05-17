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



<li className="list-unstyled pb-3">
  <div className="d-flex">
  <div className="flex-grow-1">
    <Link
        href={`/thoughts/${slug}`}
        className="link-dark link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover"
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
