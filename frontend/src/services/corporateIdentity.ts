export interface HeroData {
  id: string
  title: string
  subtitle: string
  badge: string
  primary_button_text: string
  primary_button_url: string
  secondary_button_text: string
  secondary_button_url: string
}

export interface CompanyProfileData {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  founded_year: string
  headquarters: string
}

export interface VisionMissionData {
  id: string
  type: 'vision' | 'mission'
  title: string
  description: string
  icon?: string
}

export interface CoreValueData {
  id: string
  code: string
  title: string
  description: string
}

export interface ManagementData {
  id: string
  name: string
  slug: string
  position: string
  department: string
  bio: string
  linkedin_url?: string
}

export interface CertificationData {
  id: string
  name: string
  code: string
  issuing_organization: string
  issue_date: string
  expiry_date: string
  description: string
}

export interface LegalDocumentData {
  id: string
  title: string
  document_number: string
  issuing_authority: string
  summary: string
}

export interface CorporateIdentityResponse {
  hero: HeroData
  company_profile: CompanyProfileData
  vision_missions: VisionMissionData[]
  core_values: CoreValueData[]
  managements: ManagementData[]
  certifications: CertificationData[]
  legal_documents: LegalDocumentData[]
}

// Default fallback data for seamless offline rendering
export const fallbackCorporateIdentity: CorporateIdentityResponse = {
  hero: {
    id: 'hero-1',
    title: "Connecting Indonesia's Archipelago Through Maritime Excellence",
    subtitle: 'PT Radhika Bahari Nusantara delivers reliable shipping and cargo logistics services across Indonesia\'s 17,000+ islands.',
    badge: 'Est. 1999 · Surabaya, Indonesia',
    primary_button_text: 'Explore Services',
    primary_button_url: '/services',
    secondary_button_text: 'Contact Our Team',
    secondary_button_url: '/contact',
  },
  company_profile: {
    id: 'cp-1',
    title: 'PT Radhika Bahari Nusantara',
    slug: 'pt-radhika-bahari-nusantara',
    summary: 'Indonesia\'s premier archipelagic maritime shipping and domestic cargo logistics enterprise based in Surabaya.',
    content: 'Founded in 1999, PT Radhika Bahari Nusantara has grown into a leading domestic cargo logistics enterprise. Operating from Tanjung Perak Port, Surabaya, we manage a modern fleet of 48 vessels serving major inter-island sea routes across Indonesia.',
    founded_year: '1999',
    headquarters: 'Surabaya, East Java, Indonesia',
  },
  vision_missions: [
    {
      id: 'vm-1',
      type: 'vision',
      title: 'Premier Maritime Logistics Leader',
      description: 'To be the most trusted, safe, and efficient archipelagic shipping and logistics provider in Southeast Asia.',
    },
    {
      id: 'vm-2',
      type: 'mission',
      title: 'Safe & Reliable Archipelago Connectivity',
      description: 'Connecting Indonesian islands with zero-harm maritime operations, punctual delivery, and sustainable fleet management.',
    },
  ],
  core_values: [
    { id: 'cv-1', code: 'SAFE', title: 'Safety First', description: 'Zero compromise on maritime safety, crew welfare, and environmental protection.' },
    { id: 'cv-2', code: 'RELIABLE', title: 'Reliability & Speed', description: 'Punctual cargo transit schedules across all inter-island routes.' },
    { id: 'cv-3', code: 'INTEGRITY', title: 'Integrity & Trust', description: 'Transparent governance, honest client partnerships, and strict compliance.' },
    { id: 'cv-4', code: 'INNOVATION', title: 'Digital Innovation', description: 'Modern vessel tracking and real-time cargo logistics management.' },
  ],
  managements: [
    {
      id: 'mgt-1',
      name: 'Capt. Radhika Pratama',
      slug: 'radhika-pratama',
      position: 'President Director & CEO',
      department: 'Executive Board',
      bio: '25+ years of maritime shipping leadership. Master Mariner certified with extensive experience in fleet expansion.',
    },
    {
      id: 'mgt-2',
      name: 'Budi Santoso, M.Mar',
      slug: 'budi-santoso',
      position: 'Director of Operations',
      department: 'Operations',
      bio: 'Oversees fleet operations, port logistics management, vessel maintenance, and ISM Code compliance.',
    },
    {
      id: 'mgt-3',
      name: 'Siti Rahma, S.E., M.M.',
      slug: 'siti-rahma',
      position: 'Director of Finance & Risk',
      department: 'Finance',
      bio: 'Manages corporate financial strategy, investment planning, and risk management across RBN Group divisions.',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'ISO 9001:2015 Quality Management System',
      code: 'ISO-9001-2015',
      issuing_organization: 'International Organization for Standardization',
      issue_date: '2020-01-15',
      expiry_date: '2026-12-31',
      description: 'Certified quality management for maritime shipping and port cargo logistics.',
    },
    {
      id: 'cert-2',
      name: 'ISM Code Safety Management Certificate',
      code: 'ISM-CODE-SAFETY',
      issuing_organization: 'Directorate General of Sea Transportation',
      issue_date: '2021-03-10',
      expiry_date: '2027-03-09',
      description: 'International Safety Management Code certification for safe ship operation.',
    },
  ],
  legal_documents: [
    {
      id: 'leg-1',
      title: 'SIUPAL (Surat Izin Usaha Perusahaan Angkutan Laut)',
      document_number: 'SIUPAL-1999-RBN',
      issuing_authority: 'Kementerian Perhubungan Republik Indonesia',
      summary: 'Official Indonesian sea transportation business license.',
    },
    {
      id: 'leg-2',
      title: 'NIB (Nomor Induk Berusaha)',
      document_number: 'NIB-9120001234567',
      issuing_authority: 'BKPM Indonesia',
      summary: 'Official business identification number and maritime customs clearance permit.',
    },
  ],
}

export async function fetchCorporateIdentity(): Promise<CorporateIdentityResponse> {
  try {
    const res = await fetch('/api/v1/corporate-identity')
    if (!res.ok) return fallbackCorporateIdentity
    const json = await res.json()
    return json.data ?? fallbackCorporateIdentity
  } catch {
    return fallbackCorporateIdentity
  }
}
