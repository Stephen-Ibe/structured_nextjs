"use client";

import { useGetAllTodosQuery, useGetUsersQuery } from "@/lib";
import { useCreateUserMutation } from "@/lib/api/mutations";

export default function Home() {
  const { data: allUsers } = useGetUsersQuery();
  const { mutateAsync: createUser } = useCreateUserMutation();
  const { data: allTodos } = useGetAllTodosQuery(!!allUsers);
  // useGetAllPostsQuery();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 py-4 w-fit mx-auto">
        <div className="border p-4 flex flex-col gap-y-2">
          <h1>All Users</h1>
          <hr />
          {allUsers?.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
          <button
            className="border mt-4 px-4 py-2"
            onClick={() => createUser({ id: 1, name: "John Doe" })}
          >
            Create User
          </button>
        </div>

        <div className="border p-4 flex flex-col gap-y-2">
          <h1>All Todos</h1>
          <hr />
          {allTodos?.map(({ id, title }) => (
            <div key={id}>{title}</div>
          ))}
        </div>

        <div className="border p-4 flex flex-col gap-y-2">
          <h1>All Posts</h1>
          <hr />
        </div>
      </div>
    </div>
  );
}
