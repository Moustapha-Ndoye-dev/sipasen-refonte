import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  defaultAdminEmail,
  defaultAdminPassword,
  hashAdminPassword,
} from "@/lib/admin-auth";
import type {
  AdminUser,
  AdminUserPublic,
  AdminStore,
  ContactConfig,
  ContactRequest,
  ContactRequestStatus,
  SiteContent,
  StatsConfig,
} from "@/lib/admin-types";

const STORE_PATH = path.join(process.cwd(), "data", "admin-store.json");

const DEFAULT_CONTACT: ContactConfig = {
  directCommercial: "+221 71 010 43 43",
  fixe: "+221 33 832 31 21",
  email: "commercial@sipasen.sn",
};

const DEFAULT_STATS: StatsConfig = {
  productionVolume: "400",
  productionUnit: "T",
  productionLabel: "Volume de Production Annuelle",
  productionLines: "5",
};

const DEFAULT_STORE: AdminStore = {
  siteContent: {
    contact: DEFAULT_CONTACT,
    stats: DEFAULT_STATS,
  },
  contactRequests: [],
  admins: [
    {
      id: "default-admin",
      email: defaultAdminEmail(),
      passwordHash: hashAdminPassword(defaultAdminPassword()),
      createdAt: new Date().toISOString(),
    },
  ],
};

async function ensureStoreFile(): Promise<void> {
  try {
    await readFile(STORE_PATH, "utf8");
  } catch {
    await mkdir(path.dirname(STORE_PATH), { recursive: true });
    await writeFile(STORE_PATH, JSON.stringify(DEFAULT_STORE, null, 2), "utf8");
  }
}

export async function readStore(): Promise<AdminStore> {
  await ensureStoreFile();
  const raw = await readFile(STORE_PATH, "utf8");
  try {
    const parsed = JSON.parse(raw) as Partial<AdminStore>;
    return {
      siteContent: {
        contact: {
          ...DEFAULT_CONTACT,
          ...(parsed.siteContent?.contact ?? {}),
        },
        stats: {
          ...DEFAULT_STATS,
          ...(parsed.siteContent?.stats ?? {}),
        },
      },
      contactRequests: Array.isArray(parsed.contactRequests) ? parsed.contactRequests : [],
      admins: mergeAdmins(parsed.admins),
    };
  } catch {
    return DEFAULT_STORE;
  }
}

async function writeStore(store: AdminStore): Promise<void> {
  await mkdir(path.dirname(STORE_PATH), { recursive: true });
  await writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export async function updateSiteContent(nextContent: Partial<SiteContent>): Promise<SiteContent> {
  const store = await readStore();
  const merged: SiteContent = {
    contact: {
      ...store.siteContent.contact,
      ...(nextContent.contact ?? {}),
    },
    stats: {
      ...store.siteContent.stats,
      ...(nextContent.stats ?? {}),
    },
  };
  await writeStore({
    ...store,
    siteContent: merged,
  });
  return merged;
}

export async function createContactRequest(input: {
  name: string;
  email: string;
  sector: string;
  message: string;
}): Promise<ContactRequest> {
  const store = await readStore();
  const request: ContactRequest = {
    id: cryptoRandomId(),
    name: input.name,
    email: input.email,
    sector: input.sector,
    message: input.message,
    status: "nouveau",
    createdAt: new Date().toISOString(),
  };
  const nextStore: AdminStore = {
    ...store,
    contactRequests: [request, ...store.contactRequests],
  };
  await writeStore(nextStore);
  return request;
}

export async function updateContactRequestStatus(
  id: string,
  status: ContactRequestStatus,
): Promise<ContactRequest | null> {
  const store = await readStore();
  let updated: ContactRequest | null = null;
  const contactRequests = store.contactRequests.map((request) => {
    if (request.id !== id) return request;
    updated = { ...request, status };
    return updated;
  });
  await writeStore({ ...store, contactRequests });
  return updated;
}

function cryptoRandomId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function mergeAdmins(input: unknown): AdminUser[] {
  const base = [
    {
      id: "default-admin",
      email: defaultAdminEmail(),
      passwordHash: hashAdminPassword(defaultAdminPassword()),
      createdAt: new Date().toISOString(),
    },
  ];

  if (!Array.isArray(input)) return base;

  const validAdmins = input.filter((item): item is AdminUser => {
    if (!item || typeof item !== "object") return false;
    const candidate = item as Partial<AdminUser>;
    return (
      typeof candidate.id === "string" &&
      typeof candidate.email === "string" &&
      typeof candidate.passwordHash === "string" &&
      typeof candidate.createdAt === "string"
    );
  });

  const existing = validAdmins.some(
    (admin) => admin.email.toLowerCase() === defaultAdminEmail().toLowerCase(),
  );
  return existing ? validAdmins : [...base, ...validAdmins];
}

export function toAdminPublic(admin: AdminUser): AdminUserPublic {
  return {
    id: admin.id,
    email: admin.email,
    createdAt: admin.createdAt,
  };
}

export async function listAdminUsers(): Promise<AdminUser[]> {
  const store = await readStore();
  return store.admins;
}

export async function addAdminUser(input: {
  email: string;
  password: string;
}): Promise<{ admin?: AdminUser; error?: string }> {
  const email = input.email.trim().toLowerCase();
  const password = input.password.trim();

  if (!email || !password) {
    return { error: "Email et mot de passe requis" };
  }

  const store = await readStore();
  const exists = store.admins.some((admin) => admin.email.toLowerCase() === email);
  if (exists) {
    return { error: "Cet email admin existe déjà" };
  }

  const admin: AdminUser = {
    id: cryptoRandomId(),
    email,
    passwordHash: hashAdminPassword(password),
    createdAt: new Date().toISOString(),
  };

  await writeStore({
    ...store,
    admins: [admin, ...store.admins],
  });

  return { admin };
}
