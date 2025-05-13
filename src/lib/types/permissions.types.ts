import { ROLES } from "../constants";

export type Role = keyof typeof ROLES;
export type Permission = (typeof ROLES)[Role][number];
