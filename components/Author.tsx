import Image from "next/image";
import Link from "next/link";

import { Author as AuthorData } from "@/app/api/data/route";

interface AuthorProps {
  data: AuthorData;
}

const Author = ({ data }: AuthorProps) => {
  // Check if data is defined before destructuring
  if (!data) {
    return null; // or handle it in another way based on your requirements
  }

  const { name, img, designation } = data;

  return (
    <div className="author flex py-5">
      <Image
        src={img || "/images/authors/nobleosinachi.png"}
        width="60"
        height="60"
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {name || "Unknown"}
        </Link>
        <span className="text-sm text-gray-500">
          {designation || "Content Writer"}
        </span>
      </div>
    </div>
  );
};

export default Author;
