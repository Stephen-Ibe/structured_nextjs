"use client";

import { TGetPosts, useGetAllPostsQuery } from "@/lib";
import Link from "next/link";

// const user = { role: "user", id: 1 };

const Posts = () => {
  const { data: allPosts } = useGetAllPostsQuery();

  return (
    <div className="container mx-auto">
      <div className="border p-4 flex flex-col gap-y-2">
        <div className="flex items-center justify-between px-4">
          <h1>All Posts</h1>
          <button className="border-2 py-2.5 px-4 cursor-pointer bg-white text-black hover:bg-gray-300 hover:text-black">
            Create New Post
          </button>
        </div>
        <hr />
        {allPosts?.map(({ id, title }: TGetPosts) => (
          <div key={id} className="capitalize">
            <Link href={`posts/${id}`}>{title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
