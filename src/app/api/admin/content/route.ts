import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isAdminSessionTokenValid } from "@/lib/admin-auth";
import { readStore, updateSiteContent } from "@/lib/admin-store";
import type { SiteContent } from "@/lib/admin-types";

function unauthorized() {
  return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
}

function isAuthorized(request: NextRequest): boolean {
  return isAdminSessionTokenValid(request.cookies.get(ADMIN_COOKIE_NAME)?.value);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();
  const store = await readStore();
  return NextResponse.json({ siteContent: store.siteContent });
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();
  const body = (await request.json()) as Partial<SiteContent>;
  const siteContent = await updateSiteContent(body);
  return NextResponse.json({ siteContent });
}
