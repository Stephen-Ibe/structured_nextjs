export const ROLES = {
  admin: ["view:posts", "create:post", "update:post", "delete:post"],
  moderator: ["view:posts", "create:post", "update:post"],
  user: ["view:comments"],
} as const;
