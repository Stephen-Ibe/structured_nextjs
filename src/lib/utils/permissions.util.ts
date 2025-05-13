import { ROLES } from "../constants";
import { Permission, Role } from "../types";

export function hasPermission(
  user: { id: number; role: Role },
  permission: Permission
) {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}
