"use client";

import { useGetAllTodosQuery, useGetUsersQuery } from "@/lib";
import { useCreateUserMutation } from "@/lib/api/mutations";

export default function Home() {
  const { data: allUsers } = useGetUsersQuery();
  const { data: allTodos } = useGetAllTodosQuery(!!allUsers);

  const { mutateAsync: createUser } = useCreateUserMutation();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 py-4 w-fit mx-auto">
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
            <div key={id} className="capitalize">
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
