export type ContactConfig = {
  directCommercial: string;
  fixe: string;
  email: string;
};

export type StatsConfig = {
  productionVolume: string;
  productionUnit: string;
  productionLabel: string;
  productionLines: string;
};

export type SiteContent = {
  contact: ContactConfig;
  stats: StatsConfig;
};

export type ContactRequestStatus = "nouveau" | "traite";

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  sector: string;
  message: string;
  status: ContactRequestStatus;
  createdAt: string;
};

export type AdminUser = {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export type AdminUserPublic = {
  id: string;
  email: string;
  createdAt: string;
};

export type AdminStore = {
  siteContent: SiteContent;
  contactRequests: ContactRequest[];
  admins: AdminUser[];
};
