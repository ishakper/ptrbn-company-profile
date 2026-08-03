// ─── Vessel API Service ───────────────────────────────────────────────────────
// Covers: /api/v1/vessels, /api/v1/fleet-categories

export interface FleetCategoryData {
  id: string
  name: string
  slug: string
  description: string
}

export interface FleetSpecificationData {
  gross_tonnage: string
  deadweight_tonnage: string
  length_overall: number
  draft_depth: number
  classification: string
  beam: number
}

export interface VesselData {
  id: string
  name: string
  slug: string
  imo_number: string
  call_sign: string
  flag: string
  engine: string
  speed: number
  capacity: string
  status: 'active' | 'maintenance' | 'drydock' | 'inactive'
  description: string
  featured: boolean
  category: FleetCategoryData | null
  specification: FleetSpecificationData | null
  meta_title?: string
  meta_description?: string
}

export interface VesselsResponse {
  data: VesselData[]
  meta: {
    current_page: number
    total: number
    per_page: number
    last_page: number
  }
}

// ─── Fallback Data ────────────────────────────────────────────────────────────

export const fallbackFleetCategories: FleetCategoryData[] = [
  { id: 'fc-1', name: 'Landing Craft Utility (LCU)', slug: 'lcu', description: 'Bow-ramp vessels for shallow-water and beach landing operations.' },
  { id: 'fc-2', name: 'General Cargo Carriers', slug: 'general-cargo', description: 'Multi-purpose geared cargo ships for diverse freight.' },
  { id: 'fc-3', name: 'Bulk Carriers', slug: 'bulk-carrier', description: 'Single-deck vessels for coal, minerals, cement, and grain.' },
  { id: 'fc-4', name: 'Tankers', slug: 'tanker', description: 'Liquid cargo vessels for refined fuel and vegetable oil.' },
]

export const fallbackVessels: VesselData[] = [
  {
    id: 'v-0',
    name: 'KM. JATIM CETTAR',
    slug: 'km-jatim-cettar',
    imo_number: 'E-BOAT-01',
    call_sign: 'JTM-CET',
    flag: 'Indonesia',
    engine: 'Electric Propulsion & Solar Auxiliary Array',
    speed: 10,
    capacity: 'Electric Passenger Vessel & Eco-Tourism',
    status: 'active',
    description: 'Electric passenger vessel operating at Marina Boom Banyuwangi under East Java Provincial Government green maritime initiative.',
    featured: true,
    category: { id: 'fc-5', name: 'Electric Passenger Vessel', slug: 'electric-vessel', description: 'Zero-emission solar-electric vessels for harbor transit and eco-tourism.' },
    specification: {
      gross_tonnage: '31 GT',
      deadweight_tonnage: 'N/A (Passenger)',
      length_overall: 16.5,
      draft_depth: 1.2,
      classification: 'BKI Green Vessel',
      beam: 4.8,
    },
  },
  {
    id: 'v-00', name: 'KM Gandha Nusantara 01', slug: 'km-gandha-nusantara-01',
    imo_number: '9840200', call_sign: 'YBA1', flag: 'Indonesia', status: 'active',
    engine: 'Yanmar 2× 400 HP', speed: 11.0, capacity: '350 DWT', featured: true,
    description: 'Flagship government pioneer vessel operating under Trayek R-18. Dedicated to supporting Pelayanan Kesehatan Bergerak (Yankes Bergerak), public maritime services, and outer island logistics connecting East Java, NTB, and NTT.',
    category: fallbackFleetCategories[0],
    specification: { gross_tonnage: '215 GT', deadweight_tonnage: '350 DWT', length_overall: 44.0, draft_depth: 1.8, beam: 9.5, classification: 'BKI Class (SIUPAL AL001/761/SP.SIUPAL/IX/2022)' },
  },
  {
    id: 'v-01', name: 'Gandha Nusantara 02', slug: 'gandha-nusantara-02',
    imo_number: '9840212', call_sign: 'YBAX', flag: 'Indonesia', status: 'active',
    engine: 'Yanmar 2× 350 HP', speed: 10.5, capacity: '350 DWT', featured: true,
    description: 'Specialized LCU vessel optimized for archipelagic logistics with a reinforced bow ramp for roll-on/roll-off access on shorelines and shallow ports.',
    category: fallbackFleetCategories[0],
    specification: { gross_tonnage: '210 GT', deadweight_tonnage: '350 DWT', length_overall: 42.5, draft_depth: 1.8, beam: 9.2, classification: 'BKI Class' },
  },
  {
    id: 'v-02', name: 'MV Radhika Pioneer', slug: 'mv-radhika-pioneer',
    imo_number: '9783456', call_sign: 'YBRA', flag: 'Indonesia', status: 'active',
    engine: 'Mitsubishi 1,800 HP', speed: 12.0, capacity: '3,200 DWT', featured: true,
    description: 'Archipelagic containerized and general cargo carrier equipped with onboard gear cranes for loading and unloading in remote regional ports.',
    category: fallbackFleetCategories[1],
    specification: { gross_tonnage: '1,890 GT', deadweight_tonnage: '3,200 DWT', length_overall: 88.2, draft_depth: 5.1, beam: 14.8, classification: 'BKI Class A' },
  },
  {
    id: 'v-03', name: 'MV Bahari Express', slug: 'mv-bahari-express',
    imo_number: '9801234', call_sign: 'YBBA', flag: 'Indonesia', status: 'active',
    engine: 'Wärtsilä 2,400 HP', speed: 13.5, capacity: '4,500 DWT', featured: false,
    description: 'High-speed general cargo carrier optimized for express inter-island freight with modern navigation systems.',
    category: fallbackFleetCategories[1],
    specification: { gross_tonnage: '2,650 GT', deadweight_tonnage: '4,500 DWT', length_overall: 98.5, draft_depth: 5.8, beam: 16.2, classification: 'BKI Class A' },
  },
  {
    id: 'v-04', name: 'MV Kalimantan Bulk I', slug: 'mv-kalimantan-bulk-i',
    imo_number: '9765432', call_sign: 'YBKB', flag: 'Indonesia', status: 'active',
    engine: 'MAN B&W 3,200 HP', speed: 11.0, capacity: '8,500 DWT', featured: false,
    description: 'Heavy-duty bulk carrier optimized for coal, cement, and mineral logistics across Kalimantan and Sulawesi routes.',
    category: fallbackFleetCategories[2],
    specification: { gross_tonnage: '5,200 GT', deadweight_tonnage: '8,500 DWT', length_overall: 118.0, draft_depth: 7.2, beam: 18.5, classification: 'BKI Class B' },
  },
  {
    id: 'v-05', name: 'MT Radhika Fuel I', slug: 'mt-radhika-fuel-i',
    imo_number: '9791234', call_sign: 'YBRF', flag: 'Indonesia', status: 'active',
    engine: 'Caterpillar 1,600 HP', speed: 10.0, capacity: '2,800 DWT', featured: false,
    description: 'Liquid cargo tanker for refined petroleum product distribution to outer islands without major port infrastructure.',
    category: fallbackFleetCategories[3],
    specification: { gross_tonnage: '1,650 GT', deadweight_tonnage: '2,800 DWT', length_overall: 76.5, draft_depth: 4.5, beam: 13.0, classification: 'BKI Class A' },
  },
  {
    id: 'v-06', name: 'Gandha Nusantara 05', slug: 'gandha-nusantara-05',
    imo_number: '9851239', call_sign: 'YBAY', flag: 'Indonesia', status: 'active',
    engine: 'Cummins 2× 280 HP', speed: 9.5, capacity: '250 DWT', featured: false,
    description: 'Compact LCU vessel for feeder routes and shallow island landings in Eastern Indonesia.',
    category: fallbackFleetCategories[0],
    specification: { gross_tonnage: '155 GT', deadweight_tonnage: '250 DWT', length_overall: 36.0, draft_depth: 1.5, beam: 8.0, classification: 'BKI Class' },
  },
]

// ─── Fetch Functions ──────────────────────────────────────────────────────────

export async function fetchVessels(params?: {
  search?: string
  category?: string
  status?: string
  featured?: boolean
  page?: number
  per_page?: number
}): Promise<VesselsResponse> {
  try {
    const query = new URLSearchParams()
    if (params?.search) query.set('search', params.search)
    if (params?.category) query.set('fleet_category_id', params.category)
    if (params?.status) query.set('status', params.status)
    if (params?.featured !== undefined) query.set('featured', String(params.featured))
    if (params?.page) query.set('page', String(params.page))
    if (params?.per_page) query.set('per_page', String(params.per_page ?? 12))

    const res = await fetch(`/api/v1/vessels?${query.toString()}`)
    if (!res.ok) return { data: fallbackVessels, meta: { current_page: 1, total: fallbackVessels.length, per_page: 12, last_page: 1 } }
    const json = await res.json()
    return {
      data: (json.data ?? []) as VesselData[],
      meta: json.meta ?? { current_page: 1, total: 0, per_page: 12, last_page: 1 },
    }
  } catch {
    return { data: fallbackVessels, meta: { current_page: 1, total: fallbackVessels.length, per_page: 12, last_page: 1 } }
  }
}

export async function fetchFleetCategories(): Promise<FleetCategoryData[]> {
  try {
    const res = await fetch('/api/v1/fleet-categories')
    if (!res.ok) return fallbackFleetCategories
    const json = await res.json()
    return (json.data ?? fallbackFleetCategories) as FleetCategoryData[]
  } catch {
    return fallbackFleetCategories
  }
}

export async function fetchVesselBySlug(slug: string): Promise<VesselData | null> {
  try {
    const res = await fetch(`/api/v1/vessels/${slug}`)
    if (!res.ok) return fallbackVessels.find((v) => v.slug === slug) ?? null
    const json = await res.json()
    return (json.data ?? null) as VesselData | null
  } catch {
    return fallbackVessels.find((v) => v.slug === slug) ?? null
  }
}
