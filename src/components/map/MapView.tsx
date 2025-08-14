import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { Property } from '@/features/properties/sampleData'

interface MapViewProps {
  properties?: Property[]
  center?: { lat: number; lng: number }
  zoom?: number
  className?: string
}

const defaultCenter = { lat: 6.5244, lng: 3.3792 } // Lagos coordinates

const MapView = ({ 
  properties = [], 
  center = defaultCenter, 
  zoom = 10,
  className = "h-96 w-full rounded-lg"
}: MapViewProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places']
  })

  if (!isLoaded) {
    return (
      <div className={`${className} bg-muted animate-pulse flex items-center justify-center`}>
        <span className="text-muted-foreground">Loading map...</span>
      </div>
    )
  }

  return (
    <GoogleMap
      mapContainerClassName={className}
      center={center}
      zoom={zoom}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={{
            lat: property.latitude || (6.5244 + Math.random() * 0.1 - 0.05),
            lng: property.longitude || (3.3792 + Math.random() * 0.1 - 0.05)
          }}
          title={property.title}
        />
      ))}
    </GoogleMap>
  )
}

export default MapView