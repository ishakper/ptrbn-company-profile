export interface GalleryItem {
  id: string
  title: string
  caption: string
  description: string
  alt_text: string
  seo_title: string
  copyright: string
  photographer: string
  location: string
  categories: string[]
  tags: string[]
  vessel_id?: string
  project_id?: string
  news_id?: string
  url: string
  thumbnail_url: string
  large_url: string
  responsive_urls?: string[]
  created_at?: string
}

export const fallbackGalleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'LCU Vessel Sailing',
    caption: 'RBN Gandha Nusantara 02 LCU vessel sailing in open water.',
    description: 'The PT. Pelayaran Nasional Radhika Bahari Nusantara landing craft utility (LCU) vessel, Gandha Nusantara 02, carrying out regular logistics operations in the open waters of the Indonesian archipelago under clear skies.',
    alt_text: 'RBN LCU vessel Gandha Nusantara 02 sailing in the ocean',
    seo_title: 'PT. RBN LCU Vessel Gandha Nusantara 02 Sailing',
    copyright: '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
    photographer: 'Bambang Kusuma',
    location: 'Surabaya, Indonesia',
    categories: ['fleet', 'operations', 'gallery'],
    tags: ['lcu', 'vessel', 'sailing', 'gandha-nusantara', 'ocean', 'shipping'],
    url: '/gallery/lcu-sailing.jpg',
    thumbnail_url: '/gallery/lcu-sailing.jpg',
    large_url: '/gallery/lcu-sailing.jpg',
  },
  {
    id: 'g-2',
    title: 'LCU Vessel Docked',
    caption: 'Gandha Nusantara 02 LCU docked at the harbor ramp.',
    description: 'Gandha Nusantara 02 landing craft utility vessel docked at a concrete port jetty ramp for cargo loading operations, showing the vessel bow door and the surrounding clear turquoise coastal waters.',
    alt_text: 'PT. RBN LCU vessel docked at concrete harbor ramp',
    seo_title: 'LCU Vessel Docked at Port for Cargo Loading',
    copyright: '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
    photographer: 'Bambang Kusuma',
    location: 'Surabaya, Indonesia',
    categories: ['fleet', 'port', 'gallery'],
    tags: ['docked', 'harbor', 'jetty', 'ramp', 'cargo-loading', 'lcu', 'vessel'],
    url: '/gallery/lcu-docked.jpg',
    thumbnail_url: '/gallery/lcu-docked.jpg',
    large_url: '/gallery/lcu-docked.jpg',
  },
  {
    id: 'g-3',
    title: 'Dry Dock Hull Inspection',
    caption: 'Engineers inspecting ship hull, propeller, and rudder at dry dock.',
    description: 'PT. Pelayaran Nasional Radhika Bahari Nusantara safety engineers and surveyors performing dry dock maintenance checks, reviewing the hull, propeller blades, and steering rudder of a vessel (marked with draft number 6 4 2) to ensure seaworthiness.',
    alt_text: 'Marine engineers performing dry dock hull, propeller, and rudder inspection',
    seo_title: 'Ship Dry Dock Hull and Propeller Safety Inspection',
    copyright: '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
    photographer: 'Hendri Wijaya',
    location: 'Surabaya Dry Dock',
    categories: ['operations', 'activities', 'culture', 'gallery'],
    tags: ['drydock', 'inspection', 'maintenance', 'propeller', 'hull', 'rudder', 'safety', 'engineers'],
    url: '/gallery/drydock-inspection.jpg',
    thumbnail_url: '/gallery/drydock-inspection.jpg',
    large_url: '/gallery/drydock-inspection.jpg',
  },
  {
    id: 'g-4',
    title: 'Cabin Educational Session',
    caption: 'RBN crew teaching local school children inside the passenger cabin.',
    description: 'PT. RBN Corporate Social Responsibility (CSR) and educational program, inviting school students onboard a vessel passenger cabin for a learning session led by two crew members in Electric Boat safety uniforms.',
    alt_text: 'School children attending educational program inside ship cabin',
    seo_title: 'RBN Corporate Social Responsibility (CSR) Educational Visit',
    copyright: '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
    photographer: 'Rina Amalia',
    location: 'Surabaya Port',
    categories: ['activities', 'csr', 'culture', 'gallery'],
    tags: ['csr', 'education', 'students', 'ship-cabin', 'crew', 'social-program'],
    url: '/gallery/cabin-education.jpg',
    thumbnail_url: '/gallery/cabin-education.jpg',
    large_url: '/gallery/cabin-education.jpg',
  },
  {
    id: 'g-5',
    title: 'Crew and Officers on Deck',
    caption: 'RBN officers and management standing on the ship deck.',
    description: 'Group photo of PT. Pelayaran Nasional Radhika Bahari Nusantara officers, crew, and port management standing on the deck of a vessel, with a life ring and safety signs in background, illustrating team coordination.',
    alt_text: 'PT. RBN crew and officers standing on vessel deck',
    seo_title: 'PT. RBN Maritime Crew and Management on Vessel Deck',
    copyright: '© PT. Pelayaran Nasional Radhika Bahari Nusantara',
    photographer: 'Hendri Wijaya',
    location: 'Surabaya, Indonesia',
    categories: ['management', 'activities', 'culture', 'gallery'],
    tags: ['crew', 'officers', 'management', 'ship-deck', 'team', 'safety-first'],
    url: '/gallery/crew-deck.jpg',
    thumbnail_url: '/gallery/crew-deck.jpg',
    large_url: '/gallery/crew-deck.jpg',
  },
]

export async function fetchGalleryItems(category?: string, search?: string): Promise<GalleryItem[]> {
  try {
    const params = new URLSearchParams()
    if (category) params.append('category', category)
    if (search) params.append('search', search)

    const url = `/api/v1/gallery?${params.toString()}`
    const res = await fetch(url)
    if (!res.ok) return fallbackGalleryItems
    const json = await res.json()
    return json.data ?? fallbackGalleryItems
  } catch {
    return fallbackGalleryItems
  }
}
