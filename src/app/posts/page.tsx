"use client";

import { useGetAllPostsQuery } from "@/lib";
import Link from "next/link";

const Posts = () => {
  const { data: allPosts } = useGetAllPostsQuery();

  return (
    <div className="container mx-auto">
      <div className="border p-4 flex flex-col gap-y-2">
        <h1>All Posts</h1>
        <hr />
        {allPosts?.map(({ id, title }) => (
          <div key={id} className="capitalize">
            <Link href={`posts/${id}`}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
