"use client";

import { useGetUsersQuery } from "@/lib";

export default function Home() {
  const { data } = useGetUsersQuery();

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
