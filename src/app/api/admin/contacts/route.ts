import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, isAdminSessionTokenValid } from "@/lib/admin-auth";
import { readStore, updateContactRequestStatus } from "@/lib/admin-store";
import type { ContactRequestStatus } from "@/lib/admin-types";

function unauthorized() {
  return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
}

function isAuthorized(request: NextRequest): boolean {
  return isAdminSessionTokenValid(request.cookies.get(ADMIN_COOKIE_NAME)?.value);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();
  const store = await readStore();
  return NextResponse.json({ requests: store.contactRequests });
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) return unauthorized();
  const body = (await request.json()) as { id?: string; status?: ContactRequestStatus };
  if (!body.id || !body.status || !["nouveau", "traite"].includes(body.status)) {
    return NextResponse.json({ error: "Payload invalide" }, { status: 400 });
  }
  const updated = await updateContactRequestStatus(body.id, body.status);
  if (!updated) {
    return NextResponse.json({ error: "Demande introuvable" }, { status: 404 });
  }
  return NextResponse.json({ request: updated });
}
