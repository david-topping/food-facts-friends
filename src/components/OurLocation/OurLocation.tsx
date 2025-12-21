// React and library imports
import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Component imports
import "./OurLocation.css";

// Prop type definitions
interface OurLocationProps {
  center: { lat: number; lng: number };
  zoom?: number;
  googleMapsApiKey: string;
  mapId: string;
}

const OurLocation: React.FC<OurLocationProps> = ({
  center,
  zoom = 14,
  googleMapsApiKey,
  mapId,
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;

  const onLoad = (map: google.maps.Map) => {
    if (!window.google || !google.maps.marker) {
      console.error("Google Maps API is not fully loaded yet.");
      return;
    }
    mapRef.current = map;

    markerRef.current = new google.maps.marker.AdvancedMarkerElement({
      position: center,
      map,
    });
  };

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.position = center;
    }
  }, [center]);

  return (
    <div className="location-container">
      <h3 className="heading heading-3">Where to find us</h3>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-link"
      >
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["marker"]}>
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            options={{ mapId }}
          />
        </LoadScript>
      </a>
    </div>
  );
};

export default OurLocation;
