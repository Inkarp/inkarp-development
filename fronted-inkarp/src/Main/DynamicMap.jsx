// File: DynamicMap.jsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const DynamicMap = ({ locations, initialCenter, apiKey }) => {
  const [mapCenter, setMapCenter] = useState(initialCenter);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={5}
      >
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={{ lat: loc.lat, lng: loc.lng }}
            onClick={() => setMapCenter({ lat: loc.lat, lng: loc.lng })}
            title={loc.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default DynamicMap;
