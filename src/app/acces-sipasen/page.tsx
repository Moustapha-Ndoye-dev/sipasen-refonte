import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, isAdminSessionTokenValid } from "@/lib/admin-auth";
import { readStore, toAdminPublic } from "@/lib/admin-store";
import AdminPanel from "@/app/admin/admin-panel";

export const dynamic = "force-dynamic";

export default async function AccessSipasenPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!isAdminSessionTokenValid(session)) {
    redirect("/acces-sipasen/login");
  }

  const store = await readStore();

  return (
    <AdminPanel
      initialContent={store.siteContent}
      initialRequests={store.contactRequests}
      initialAdmins={store.admins.map(toAdminPublic)}
    />
  );
}
