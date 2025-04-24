"use client";

import { useGetUsersQuery } from "@/lib";
import { useCreateUserMutation } from "@/lib/api/mutations";

export default function Home() {
  const { data } = useGetUsersQuery();
  const { mutateAsync: createUser } = useCreateUserMutation();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <button
        className="border mt-4 px-4 py-2"
        onClick={() => createUser({ id: 1, name: "John Doe" })}
      >
        Create User
      </button>
    </div>
  );
}
