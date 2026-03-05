import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isAdminSessionTokenValid } from "@/lib/admin-auth";
import { addAdminUser, listAdminUsers, toAdminPublic } from "@/lib/admin-store";

function unauthorized() {
  return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
}

function isAuthorized(request: NextRequest): boolean {
  return isAdminSessionTokenValid(request.cookies.get(ADMIN_COOKIE_NAME)?.value);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();
  const admins = await listAdminUsers();
  return NextResponse.json({ admins: admins.map(toAdminPublic) });
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();

  const body = (await request.json()) as { email?: string; password?: string };
  const result = await addAdminUser({
    email: body.email ?? "",
    password: body.password ?? "",
  });

  if (result.error || !result.admin) {
    return NextResponse.json({ error: result.error ?? "Erreur" }, { status: 400 });
  }

  return NextResponse.json({ admin: toAdminPublic(result.admin) }, { status: 201 });
}
