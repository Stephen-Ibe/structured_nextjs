"use client";

import { useGetAllPostsQuery } from "@/lib";
import { Suspense, use } from "react";

const Post = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data: post } = useGetAllPostsQuery(!!id, { id });

  console.log(post);

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <div className="container mx-auto p-4 border capitalize w-2/4 mt-4">
        <h2 className="font-bold text-xl">{`${post?.id}. ${post?.title}`}</h2>
        <hr className="my-2" />
        <p className="mt-4">{post?.body}</p>
      </div>
    </Suspense>
  );
};

export default Post;
