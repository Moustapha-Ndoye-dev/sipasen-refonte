import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_COOKIE_NAME,
  createAdminSessionToken,
  isValidAdminCredentials,
} from "@/lib/admin-auth";
import { listAdminUsers } from "@/lib/admin-store";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { email?: string; password?: string };
  const email = (body.email ?? "").trim();
  const password = body.password ?? "";
  const admins = await listAdminUsers();

  if (!isValidAdminCredentials(email, password, admins)) {
    return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE_NAME, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
