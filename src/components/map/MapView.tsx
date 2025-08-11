import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Property } from '@/features/properties/sampleData'
import { useEffect } from 'react'

// Fix default marker icons path for Vite
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

interface MapViewProps {
  properties: Property[]
}

const MapView = ({ properties }: MapViewProps) => {
  // Default to Lagos center
  const center: [number, number] = [6.5244, 3.3792]

  useEffect(() => {
    // no-op, placeholder for future map controls
  }, [])

  return (
    <div className="w-full h-[420px] rounded-lg overflow-hidden border border-border">
      {/* @ts-ignore center prop is valid in react-leaflet; suppress TS noise */}
      <MapContainer center={center as any} zoom={11} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {properties.map((p) => (
          <Marker key={p.id} position={p.coordinates as any}>
            <Popup>
              <div className="space-y-1">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.location}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView
