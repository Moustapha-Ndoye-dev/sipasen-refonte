import { NextRequest, NextResponse } from "next/server";
import { createContactRequest } from "@/lib/admin-store";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    sector?: string;
    message?: string;
  };

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const sector = (body.sector ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  const created = await createContactRequest({
    name,
    email,
    sector: sector || "Non précisé",
    message,
  });

  return NextResponse.json({ request: created }, { status: 201 });
}
