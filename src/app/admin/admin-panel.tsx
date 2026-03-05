"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type {
  AdminUserPublic,
  ContactRequest,
  ContactRequestStatus,
  SiteContent,
} from "@/lib/admin-types";

type AdminPanelProps = {
  initialContent: SiteContent;
  initialRequests: ContactRequest[];
  initialAdmins: AdminUserPublic[];
};

export default function AdminPanel({
  initialContent,
  initialRequests,
  initialAdmins,
}: AdminPanelProps) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [requests, setRequests] = useState<ContactRequest[]>(initialRequests);
  const [admins, setAdmins] = useState<AdminUserPublic[]>(initialAdmins);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState<"all" | ContactRequestStatus>("all");

  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [adminMessage, setAdminMessage] = useState("");
  const [addingAdmin, setAddingAdmin] = useState(false);

  const filteredRequests = useMemo(() => {
    if (filter === "all") return requests;
    return requests.filter((request) => request.status === filter);
  }, [filter, requests]);

  async function saveContent() {
    setSaving(true);
    setMessage("");

    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      setSaving(false);
      setMessage("Erreur lors de l'enregistrement.");
      return;
    }

    setSaving(false);
    setMessage("Contenu mis a jour.");
    router.refresh();
  }

  async function refreshRequests() {
    const response = await fetch("/api/admin/contacts");
    if (!response.ok) return;
    const data = (await response.json()) as { requests: ContactRequest[] };
    setRequests(data.requests);
  }

  async function updateStatus(id: string, status: ContactRequestStatus) {
    const response = await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    if (!response.ok) return;
    setRequests((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  async function refreshAdmins() {
    const response = await fetch("/api/admin/users");
    if (!response.ok) return;
    const data = (await response.json()) as { admins: AdminUserPublic[] };
    setAdmins(data.admins);
  }

  async function addAdmin() {
    setAddingAdmin(true);
    setAdminMessage("");

    const response = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newAdminEmail,
        password: newAdminPassword,
      }),
    });

    if (!response.ok) {
      const body = (await response.json()) as { error?: string };
      setAdminMessage(body.error ?? "Impossible d'ajouter cet admin.");
      setAddingAdmin(false);
      return;
    }

    setNewAdminEmail("");
    setNewAdminPassword("");
    setAdminMessage("Admin ajoute avec succes.");
    setAddingAdmin(false);
    await refreshAdmins();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/acces-sipasen/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-muted/40 px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin SIPASEN</h1>
            <p className="text-sm text-muted-foreground">
              Gere les infos de contact, les stats, les demandes et les admins.
            </p>
          </div>
          <button
            onClick={logout}
            className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground"
          >
            Deconnexion
          </button>
        </header>

        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-foreground">Contenu du site</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contact</h3>
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.contact.directCommercial}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    contact: { ...current.contact, directCommercial: event.target.value },
                  }))
                }
                placeholder="Direct commercial"
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.contact.fixe}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    contact: { ...current.contact, fixe: event.target.value },
                  }))
                }
                placeholder="Fixe"
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.contact.email}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    contact: { ...current.contact, email: event.target.value },
                  }))
                }
                placeholder="Email commercial"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Statistiques</h3>
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.stats.productionVolume}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    stats: { ...current.stats, productionVolume: event.target.value },
                  }))
                }
                placeholder="Volume"
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.stats.productionUnit}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    stats: { ...current.stats, productionUnit: event.target.value },
                  }))
                }
                placeholder="Unite (T)"
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.stats.productionLabel}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    stats: { ...current.stats, productionLabel: event.target.value },
                  }))
                }
                placeholder="Label volume"
              />
              <input
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                value={content.stats.productionLines}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    stats: { ...current.stats, productionLines: event.target.value },
                  }))
                }
                placeholder="Lignes de production"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={saveContent}
              disabled={saving}
              className="rounded-xl bg-brand-beige px-5 py-3 text-sm font-bold uppercase tracking-wider text-white disabled:opacity-60"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
            {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Admins</h2>
            <button
              onClick={refreshAdmins}
              className="rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold"
            >
              Rafraichir
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Ajouter un admin</h3>
              <input
                type="email"
                value={newAdminEmail}
                onChange={(event) => setNewAdminEmail(event.target.value)}
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                placeholder="email admin"
              />
              <input
                type="password"
                value={newAdminPassword}
                onChange={(event) => setNewAdminPassword(event.target.value)}
                className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
                placeholder="mot de passe"
              />
              <button
                onClick={addAdmin}
                disabled={addingAdmin}
                className="rounded-xl bg-brand-grey px-4 py-2 text-sm font-bold uppercase tracking-wide text-white disabled:opacity-60"
              >
                {addingAdmin ? "Ajout..." : "Ajouter admin"}
              </button>
              {adminMessage ? <p className="text-sm text-muted-foreground">{adminMessage}</p> : null}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Liste des admins</h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30 text-left">
                      <th className="px-3 py-2 font-semibold">Email</th>
                      <th className="px-3 py-2 font-semibold">Creation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin) => (
                      <tr key={admin.id} className="border-b border-border/50 last:border-0">
                        <td className="px-3 py-2">{admin.email}</td>
                        <td className="px-3 py-2 text-muted-foreground">
                          {new Date(admin.createdAt).toLocaleString("fr-FR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-bold text-foreground">Demandes de contact</h2>
            <div className="flex items-center gap-2">
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value as "all" | ContactRequestStatus)}
                className="rounded-xl border border-border bg-white px-3 py-2 text-sm"
              >
                <option value="all">Tous</option>
                <option value="nouveau">Nouveaux</option>
                <option value="traite">Traites</option>
              </select>
              <button
                onClick={refreshRequests}
                className="rounded-xl border border-border bg-white px-3 py-2 text-sm font-semibold"
              >
                Rafraichir
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="px-3 py-2 font-semibold">Date</th>
                  <th className="px-3 py-2 font-semibold">Nom</th>
                  <th className="px-3 py-2 font-semibold">Email</th>
                  <th className="px-3 py-2 font-semibold">Secteur</th>
                  <th className="px-3 py-2 font-semibold">Message</th>
                  <th className="px-3 py-2 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="border-b border-border/60 align-top">
                    <td className="px-3 py-3 text-muted-foreground">
                      {new Date(request.createdAt).toLocaleString("fr-FR")}
                    </td>
                    <td className="px-3 py-3 font-semibold text-foreground">{request.name}</td>
                    <td className="px-3 py-3 text-foreground">{request.email}</td>
                    <td className="px-3 py-3 text-foreground">{request.sector}</td>
                    <td className="max-w-[280px] px-3 py-3 text-foreground">{request.message}</td>
                    <td className="px-3 py-3">
                      <select
                        value={request.status}
                        onChange={(event) =>
                          updateStatus(request.id, event.target.value as ContactRequestStatus)
                        }
                        className="rounded-lg border border-border bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide"
                      >
                        <option value="nouveau">Nouveau</option>
                        <option value="traite">Traite</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
