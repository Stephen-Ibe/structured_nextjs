export const ROLES = {
  admin: ["view:posts", "create:post", "update:post", "delete:post"],
  moderator: ["view:posts", "create:post", "delete:post"],
  user: ["view:comments"],
} as const;
