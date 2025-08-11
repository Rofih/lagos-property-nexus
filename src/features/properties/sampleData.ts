export interface Property {
  id: string
  title: string
  price: number
  location: string
  type: 'apartment' | 'house' | 'studio' | 'office'
  bedrooms: number
  bathrooms: number
  amenities: string[]
  coordinates: [number, number] // [lat, lng]
  images: string[]
  verified: boolean
}

export const sampleProperties: Property[] = [
  {
    id: 'p1',
    title: 'Modern 2BR Apartment in Lekki',
    price: 3500000,
    location: 'Lekki',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['parking', 'security', 'pool'],
    coordinates: [6.4419, 3.4723],
    images: ['/placeholder.svg'],
    verified: true,
  },
  {
    id: 'p2',
    title: 'Detached 4BR House in Ikeja GRA',
    price: 120000000,
    location: 'Ikeja',
    type: 'house',
    bedrooms: 4,
    bathrooms: 4,
    amenities: ['parking', 'solar', 'water'],
    coordinates: [6.6018, 3.3515],
    images: ['/placeholder.svg'],
    verified: false,
  },
  {
    id: 'p3',
    title: 'Studio Near Victoria Island',
    price: 1800000,
    location: 'Victoria Island',
    type: 'studio',
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['security', 'gym'],
    coordinates: [6.4292, 3.4219],
    images: ['/placeholder.svg'],
    verified: true,
  },
]
