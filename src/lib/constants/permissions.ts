export const ROLES = {
  admin: ["view:users", "create:user", "update:user", "delete:user"],
  moderator: ["view:users", "create:user", "delete:user"],
  user: ["view:comments", "create:user"],
} as const;
