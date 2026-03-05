import crypto from "node:crypto";
import type { AdminUser } from "@/lib/admin-types";

export const ADMIN_COOKIE_NAME = "sipasen_admin_session";

const SESSION_TTL_SECONDS = 60 * 60 * 12;

function getSecret(): string {
  return process.env.ADMIN_SECRET ?? "change-me-admin-secret";
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSecret()).update(payload).digest("hex");
}

function getPasswordSalt(): string {
  return process.env.ADMIN_PASSWORD_SALT ?? "sipasen-admin-salt";
}

export function hashAdminPassword(password: string): string {
  return crypto
    .createHash("sha256")
    .update(`${password}:${getPasswordSalt()}`)
    .digest("hex");
}

export function isValidAdminCredentials(
  email: string,
  password: string,
  admins: AdminUser[],
): boolean {
  const normalizedEmail = email.trim().toLowerCase();
  const admin = admins.find((item) => item.email.toLowerCase() === normalizedEmail);
  if (!admin) return false;
  return admin.passwordHash === hashAdminPassword(password);
}

export function defaultAdminEmail(): string {
  return process.env.ADMIN_EMAIL ?? "admin@sipasen.sn";
}

export function defaultAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "admin123";
}

export function createAdminSessionToken(): string {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function isAdminSessionTokenValid(token?: string): boolean {
  if (!token) return false;
  const [expRaw, signature] = token.split(".");
  if (!expRaw || !signature) return false;

  const expected = sign(expRaw);
  if (signature !== expected) return false;

  const exp = Number(expRaw);
  if (!Number.isFinite(exp)) return false;
  return exp > Math.floor(Date.now() / 1000);
}
