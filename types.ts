export enum Goal {
  AUTOMATE = "Automate Operations",
  SALES = "Improve Sales/Marketing",
  SUPPORT = "Customer Support",
  DATA = "Data/Reporting",
  OTHER = "Other"
}

export enum ContactMethod {
  EMAIL = "Email",
  PHONE = "Phone"
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  companyName: string;
  website: string;
  primaryGoal: Goal | "";
  description: string;
  budgetRange: string;
  contactMethod: ContactMethod;
  phone: string;
  consent: boolean;
  honeypot: string;
}

export interface NavItem {
  label: string;
  path: string;
}