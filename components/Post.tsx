//
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

import { Post as PostData } from "@/app/api/data/route";
interface PostProps {
  data: PostData;
}

const Post = ({ data }: PostProps) => {
  const { id, title, subtitle, category, img, description, published, author } =
    data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"#"}>
          <Image
            src={img || "/images/img1.png"}
            alt={img}
            className="rounded"
            width={"500"}
            height={"350"}
          />
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"#"}>
            {category || "Uncategorized"}
          </Link>
          {" — "}
          <Link className="text-gray-800 hover:text-gray-600" href={"#"}>
            {published || "Jan 1, 1970"}
            {/* ┬ ↗ */}
          </Link>
        </div>
        <div className="title">
          <Link
            href={""}
            className="text-xl font-bold text-gray-800 hover:text-gray-600 py-3"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="description text-gray-500 py-3">{subtitle}</p>
        {author ? <Author data={author}></Author> : <></>}{" "}
      </div>
    </div>
  );
};

export default Post;
