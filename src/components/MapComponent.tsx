import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Company location coordinates (Bağcılar, İstanbul)
  const companyLocation = {
    lng: 28.8403, // Longitude for Bağcılar area
    lat: 41.0393  // Latitude for Bağcılar area
  };

  const initializeMap = async (token: string) => {
    if (!mapContainer.current) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [companyLocation.lng, companyLocation.lat],
        zoom: 15
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      // Add marker for company location
      new mapboxgl.default.Marker({
        color: 'hsl(var(--primary))'
      })
        .setLngLat([companyLocation.lng, companyLocation.lat])
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold text-sm mb-1">Bety Ambalaj</h3>
                <p class="text-xs text-gray-600">
                  100. Yıl Mah. Matbaacılar Sitesi<br/>
                  5. Cad. No:17/1 İç Kapı No:319<br/>
                  Bağcılar/İstanbul, Turkey
                </p>
              </div>
            `)
        )
        .addTo(map.current);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  if (showTokenInput) {
    return (
      <div className="w-full h-96 bg-card rounded-lg border flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Harita Yüklemek İçin</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Mapbox token'ınızı girin. Token almak için{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>{' '}
            adresini ziyaret edin.
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-3">
            <div>
              <Label htmlFor="mapbox-token" className="sr-only">
                Mapbox Token
              </Label>
              <Input
                id="mapbox-token"
                type="text"
                placeholder="Mapbox public token'ınızı girin..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Haritayı Yükle
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 bg-card rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default MapComponent;