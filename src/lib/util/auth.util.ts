const ROLES = {
  admin: ["view:users", "create:user", "update:user", "delete:user"],
  moderator: ["view:users", "create:user", "delete:user"],
  user: ["view:comments", "create:user"],
} as const;

type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

export function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
) {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}
