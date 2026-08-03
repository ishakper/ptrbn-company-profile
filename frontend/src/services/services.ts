// ─── Services API Service ─────────────────────────────────────────────────────
// Covers: /api/v1/services, /api/v1/service-categories

export interface ServiceCategoryData {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
}

export interface ServiceData {
  id: string
  title: string
  slug: string
  short_description: string
  description: string
  advantages: string[]
  workflow: Array<{ step: number; title: string; description: string }>
  coverage_area: string
  cta: { text: string; url: string } | null
  status: 'published' | 'draft'
  featured: boolean
  order: number
  category: ServiceCategoryData | null
  meta_title?: string
  meta_description?: string
}

// ─── Fallback Data ────────────────────────────────────────────────────────────

export const fallbackServiceCategories: ServiceCategoryData[] = [
  { id: 'sc-1', name: 'Cargo Shipping', slug: 'cargo-shipping', description: 'End-to-end cargo logistics across the Indonesian archipelago.' },
  { id: 'sc-2', name: 'Special Cargo', slug: 'special-cargo', description: 'Heavy-lift, oversized, and project cargo handling.' },
  { id: 'sc-3', name: 'Passenger & Vehicle', slug: 'passenger-vehicle', description: 'Ferry and passenger vessel services.' },
  { id: 'sc-4', name: 'Port & Agency', slug: 'port-agency', description: 'Port clearance and ship agent services.' },
]

export const fallbackServices: ServiceData[] = [
  {
    id: 'svc-green',
    title: 'Electric Maritime Transportation (KM. JATIM CETTAR)',
    slug: 'electric-maritime-transportation',
    short_description: 'Zero-emission solar-electric passenger vessel operations supporting green maritime connectivity and eco-tourism.',
    description: 'PT. Pelayaran Nasional Radhika Bahari Nusantara operates and supports green maritime electric vessel operations in collaboration with East Java Provincial Government. Featuring KM. JATIM CETTAR at Marina Boom Banyuwangi, providing quiet, clean, zero-emission harbor transit and public eco-maritime transport.',
    advantages: ['Zero-Emission Electric Propulsion', 'Solar Panel Auxiliary Array', 'Official East Java Provincial Government Partner', 'Eco-Tourism & Marina Transit Operations', 'Noise-Free Maritime Experience'],
    workflow: [
      { step: 1, title: 'Solar & Grid Charging', description: 'Electric vessel batteries charged using clean solar array & shoreline energy at Marina Boom.' },
      { step: 2, title: 'Passenger Embarkation', description: 'Passengers embarked safely at Marina Boom Banyuwangi eco-marina terminal.' },
      { step: 3, title: 'Zero-Emission Transit', description: 'Smooth, silent navigation around harbor transit zone and Banyuwangi coastal waters.' },
      { step: 4, title: 'Eco-Tourism Service', description: 'Providing clean public maritime transport and environmental awareness.' },
    ],
    coverage_area: 'Marina Boom Banyuwangi, East Java Coastal Waters',
    cta: { text: 'Explore Green Maritime', url: '/projects' },
    status: 'published', featured: true, order: 0,
    category: fallbackServiceCategories[2],
  },
  {
    id: 'svc-0', title: 'Pioneer Shipping (Angkutan Laut Perintis)', slug: 'pioneer-shipping-perintis',
    short_description: 'Government-mandated pioneer shipping services connecting remote, outer, and underdeveloped island ports across Indonesia.',
    description: 'PT. Pelayaran Nasional Radhika Bahari Nusantara operates official Angkutan Laut Perintis routes under Ministry of Transportation contracts (including Trayek R-18). Serving base ports like Kalianget, Sumenep to destination ports in NTB and NTT with 30 scheduled voyages per year, guaranteeing island connectivity and essential goods distribution.',
    advantages: ['Registered LKPP e-Katalog Provider', 'Official SIUPAL No. AL001/761/SP.SIUPAL/IX/2022', '30 Scheduled Voyages / Year (Trayek R-18)', 'Subsidized & Public Service Obligation (PSO) ready', 'Island health & medical emergency support'],
    workflow: [
      { step: 1, title: 'Schedule Publication', description: 'Annual voyage schedule (30 voyages/year) published in coordination with Ministry of Transportation.' },
      { step: 2, title: 'Base Port Loading', description: 'Cargo and public passengers loaded at main base port Kalianget, Sumenep, East Java.' },
      { step: 3, title: 'Inter-Island Transit', description: 'Navigation across assigned route leg sequence (Kangean → Sapeken → Celukan Bawang → Labuhan Lombok → Badas → Bima → Waikelo).' },
      { step: 4, title: 'Discharge & Public Service', description: 'Cargo discharged, passengers disembarked, and mobile medical team (Yankes Bergerak) deployed at remote island ports.' },
    ],
    coverage_area: 'East Java (Sumenep/Kalianget), Bali, West Nusa Tenggara (NTB), East Nusa Tenggara (NTT)',
    cta: { text: 'Inquire Pioneer Routes', url: '/routes' },
    status: 'published', featured: true, order: 0,
    category: fallbackServiceCategories[0],
  },
  {
    id: 'svc-1', title: 'General Cargo Shipping', slug: 'general-cargo-shipping',
    short_description: 'Regular inter-island cargo shipping services across major Indonesian ports with reliable, punctual schedules.',
    description: 'Our general cargo shipping service covers all major inter-island routes throughout the Indonesian archipelago. From manufactured goods and industrial equipment to FMCG and consumer products, our modern fleet of 24 general cargo carriers ensures your freight arrives safely and on time. We offer both full-ship charter and groupage (LCL) booking options.',
    advantages: ['Nationwide port coverage', 'Fixed weekly sailing schedules', 'Real-time GPS cargo tracking', 'ISO 9001:2015 certified quality management', 'Competitive freight rates'],
    workflow: [
      { step: 1, title: 'Booking & Documentation', description: 'Submit cargo booking request. Our team prepares Bill of Lading, cargo manifest, and customs documentation.' },
      { step: 2, title: 'Cargo Receiving & Loading', description: 'Cargo is received at the origin port, inspected, and loaded by our certified stevedoring team.' },
      { step: 3, title: 'Sea Transit', description: 'Vessel departs on scheduled sail date. Real-time GPS tracking is available during transit.' },
      { step: 4, title: 'Discharge & Delivery', description: 'Cargo is discharged at destination port and released to consignee upon presentation of documents.' },
    ],
    coverage_area: 'Java, Sumatra, Kalimantan, Sulawesi, Maluku, Papua',
    cta: { text: 'Request a Quote', url: '/contact' },
    status: 'published', featured: true, order: 1,
    category: fallbackServiceCategories[0],
  },
  {
    id: 'svc-2', title: 'Bulk Cargo Transport', slug: 'bulk-cargo-transport',
    short_description: 'High-capacity bulk carrier services for coal, cement, minerals, and agricultural commodities.',
    description: 'Our bulk carrier fleet of 8 single-deck vessels is purpose-built for the transportation of unpacked, unpackaged cargo commodities. We serve Indonesia\'s mining, energy, and agricultural sectors with dedicated bulk cargo routes between Kalimantan, South Sumatra, Sulawesi, and Java.',
    advantages: ['8 dedicated bulk carriers', 'Coal, cement, minerals, grain', 'Mine-to-plant logistics solutions', 'Self-discharging capability on select vessels', 'Long-term charter contracts available'],
    workflow: [
      { step: 1, title: 'Charter Agreement', description: 'Define cargo type, volume, loading/discharge ports, and laycan dates.' },
      { step: 2, title: 'Pre-Loading Survey', description: 'Official cargo surveyor conducts quantity and quality inspection before loading.' },
      { step: 3, title: 'Bulk Loading', description: 'Grab crane or conveyor loading at origin terminal. Cargo manifest finalized.' },
      { step: 4, title: 'Discharge & Survey', description: 'Cargo discharged at destination terminal. Final outturn survey conducted.' },
    ],
    coverage_area: 'Kalimantan, Sumatra, Sulawesi, Java',
    cta: { text: 'Request Bulk Charter', url: '/contact' },
    status: 'published', featured: true, order: 2,
    category: fallbackServiceCategories[0],
  },
  {
    id: 'svc-3', title: 'Oversized & Heavy-Lift Cargo', slug: 'oversized-heavy-lift',
    short_description: 'Specialized project cargo handling for oversized machinery, industrial equipment, and heavy-lift items.',
    description: 'We specialize in the transportation of out-of-gauge and heavy-lift cargo including industrial machinery, power plant turbines, construction equipment, and wind turbine components. Our geared vessels are equipped with onboard cranes capable of lifting up to 25 tons per lift, allowing operations in ports without fixed crane infrastructure.',
    advantages: ['Onboard crane capacity up to 25 tons', 'Out-of-gauge cargo routing expertise', 'Engineering cargo stowage plans', 'Port survey and feasibility studies', 'OOG permit handling'],
    workflow: [
      { step: 1, title: 'Cargo Survey & Engineering', description: 'Technical team surveys cargo dimensions, weight, and center of gravity for stowage planning.' },
      { step: 2, title: 'Vessel Selection & Preparation', description: 'Appropriate geared vessel selected. Deck plating and lashing points prepared.' },
      { step: 3, title: 'Loading Operation', description: 'Crane operation conducted under marine superintendent supervision. Cargo secured per stowage plan.' },
      { step: 4, title: 'Safe Delivery', description: 'Vessel transits to destination port. Cargo discharged and handed over to consignee.' },
    ],
    coverage_area: 'Nationwide — all major Indonesian ports',
    cta: { text: 'Discuss Heavy-Lift Needs', url: '/contact' },
    status: 'published', featured: true, order: 3,
    category: fallbackServiceCategories[1],
  },
  {
    id: 'svc-4', title: 'LCU Archipelago Logistics', slug: 'lcu-archipelago-logistics',
    short_description: 'Landing craft utility services for islands without port infrastructure — direct beach and ramp landings.',
    description: 'Our fleet of Landing Craft Utility (LCU) vessels is uniquely suited for serving remote Indonesian islands that lack conventional port infrastructure. LCU vessels feature a reinforced bow ramp enabling roll-on/roll-off (RoRo) discharge directly onto shorelines, riverbanks, and shallow beach areas — making it the ideal solution for outer-island logistics.',
    advantages: ['RoRo bow ramp for beach landing', 'No port infrastructure required', 'Vehicle and machinery transport', 'Outer island feeder routes', 'Shallow draft operations (1.5–1.8m)'],
    workflow: [
      { step: 1, title: 'Route Assessment', description: 'Team surveys destination shoreline or ramp condition and tidal schedules.' },
      { step: 2, title: 'Loading', description: 'Vehicles, machinery, or palletized cargo loaded via bow ramp or crane at origin.' },
      { step: 3, title: 'Island Transit', description: 'LCU navigates to destination island, timing arrival for favorable tide conditions.' },
      { step: 4, title: 'Beach Discharge', description: 'Vessel beaches bow. Cargo rolls off or is discharged directly onto the shoreline.' },
    ],
    coverage_area: 'Eastern Indonesia, Outer Islands, Maluku, Papua, NTT',
    cta: { text: 'Get LCU Quote', url: '/contact' },
    status: 'published', featured: false, order: 4,
    category: fallbackServiceCategories[0],
  },
  {
    id: 'svc-5', title: 'Passenger & Vehicle Ferry', slug: 'passenger-vehicle-ferry',
    short_description: 'Safe and comfortable inter-island passenger and vehicle transportation services.',
    description: 'We operate passenger and vehicle ferry routes connecting key island communities across the Indonesian archipelago. Our passenger vessels are equipped with comfortable seating cabins, safety equipment compliant with SOLAS regulations, and dedicated vehicle decks for cars, motorcycles, and small trucks.',
    advantages: ['SOLAS-compliant safety equipment', 'Comfortable cabin classes', 'Vehicle deck for cars and trucks', 'Regular sailing schedules', 'Online booking support'],
    workflow: [
      { step: 1, title: 'Ticket Booking', description: 'Book passenger tickets and vehicle slots through our commercial office or agents.' },
      { step: 2, title: 'Check-In', description: 'Passengers and vehicles check in at the origin port terminal 2 hours before departure.' },
      { step: 3, title: 'Departure & Transit', description: 'Vessel departs on schedule. Passengers enjoy onboard facilities during transit.' },
      { step: 4, title: 'Arrival', description: 'Vessel docks at destination port. Passengers disembark and vehicles roll off.' },
    ],
    coverage_area: 'Java, Madura, Bali, Lombok, Sumbawa',
    cta: { text: 'View Schedules', url: '/contact' },
    status: 'published', featured: false, order: 5,
    category: fallbackServiceCategories[2],
  },
  {
    id: 'svc-6', title: 'Port Agency & Ship Chandlering', slug: 'port-agency-ship-chandlering',
    short_description: 'Comprehensive port agency, customs clearance, and ship chandlering services at Surabaya and partner ports.',
    description: 'Our port agency team provides end-to-end port services for arriving and departing vessels including customs clearance, immigration formalities, cargo documentation, crew change arrangements, and vessel supplies (chandlering). We are registered agents at Tanjung Perak Port, Surabaya and maintain agent partnerships at 12 ports across Indonesia.',
    advantages: ['Registered at Tanjung Perak Port Surabaya', '24/7 port operations support', 'Customs & immigration handling', 'Crew change coordination', 'Vessel provisioning & chandlering'],
    workflow: [
      { step: 1, title: 'Pre-Arrival Notice', description: 'Ship Master files pre-arrival notification. Agency team prepares customs documents.' },
      { step: 2, title: 'Port Entry', description: 'Vessel is guided to assigned berth. Port clearance formalities completed.' },
      { step: 3, title: 'Port Services', description: 'Chandlering, crew transfers, repairs, and cargo operations coordinated by agency team.' },
      { step: 4, title: 'Departure Clearance', description: 'Outward clearance and port dues settled. Vessel departs with all documents in order.' },
    ],
    coverage_area: 'Surabaya (Main) + Partner Ports: Makassar, Balikpapan, Samarinda, Belawan',
    cta: { text: 'Contact Agency Team', url: '/contact' },
    status: 'published', featured: false, order: 6,
    category: fallbackServiceCategories[3],
  },
]

// ─── Fetch Functions ──────────────────────────────────────────────────────────

export async function fetchServices(params?: {
  search?: string
  category?: string
  featured?: boolean
}): Promise<ServiceData[]> {
  try {
    const query = new URLSearchParams({ status: 'published' })
    if (params?.search) query.set('search', params.search)
    if (params?.category) query.set('service_category_id', params.category)
    if (params?.featured !== undefined) query.set('featured', String(params.featured))

    const res = await fetch(`/api/v1/services?${query.toString()}`)
    if (!res.ok) return fallbackServices
    const json = await res.json()
    return (json.data ?? fallbackServices) as ServiceData[]
  } catch {
    return fallbackServices
  }
}

export async function fetchServiceCategories(): Promise<ServiceCategoryData[]> {
  try {
    const res = await fetch('/api/v1/service-categories')
    if (!res.ok) return fallbackServiceCategories
    const json = await res.json()
    return (json.data ?? fallbackServiceCategories) as ServiceCategoryData[]
  } catch {
    return fallbackServiceCategories
  }
}
