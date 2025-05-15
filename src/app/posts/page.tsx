"use client";

import { hasPermission, Role, useGetAllPostsQuery } from "@/lib";
import { useVirtualizer } from "@tanstack/react-virtual";
import Link from "next/link";
import { useRef } from "react";

const user = { role: "admin" as Role, id: 1 };
const canCreatePost = hasPermission(user, "create:post");

const Posts = () => {
  const { data: allPosts } = useGetAllPostsQuery();
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: 100,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  return (
    <div className="container mx-auto ">
      <div className="border p-4 flex flex-col gap-y-2">
        <div className="flex items-center justify-between px-4">
          <h1>All Posts</h1>
          {canCreatePost && (
            <button className="border-2 py-2.5 px-4 cursor-pointer bg-white text-black hover:bg-gray-300 hover:text-black rounded-md">
              Create New Post
            </button>
          )}
        </div>
        <hr />
        <div
          className="h-90 overflow-auto border border-amber-200"
          ref={parentRef}
        >
          <div className="relative">
            {virtualizer.getVirtualItems().map((item) =>
              item.index < allPosts?.length ? (
                <div
                  key={item.index}
                  className="capitalize absolute left-0 right-0 bg-white border-b border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  style={{
                    height: item.size,
                    transform: `translateY(${item.start}px)`,
                  }}
                >
                  <Link href={`posts/${allPosts[item.index].id}`}>
                    {allPosts[item.index].title}
                  </Link>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

// {allPosts?.map(({ id, title }: TGetPosts) => (
//   <div key={id} className="capitalize">
//     <Link href={`posts/${id}`}>{title}</Link>
//   </div>
// ))}
