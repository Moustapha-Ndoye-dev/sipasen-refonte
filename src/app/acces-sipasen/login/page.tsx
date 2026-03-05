"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessSipasenLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setLoading(false);
      setError("Identifiants invalides");
      return;
    }

    router.push("/acces-sipasen");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-muted/40 px-6 py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-foreground">Connexion Admin</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
              placeholder="admin@sipasen.sn"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-foreground">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none ring-brand-beige focus:ring-2"
              placeholder="********"
            />
          </div>

          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-beige px-4 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </main>
  );
}
