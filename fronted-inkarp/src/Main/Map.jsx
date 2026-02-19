import React from "react";
import DynamicMap from "./DynamicMap";


const Map = () => {
  const locations = [
    { name: "Caterlux, Delhi", lat: 28.7211, lng: 77.1630 },
    { name: "Litomatic, Udaipur", lat: 24.6045, lng: 73.7090 },
    { name: "Kwality Photonics, Hyderabad", lat: 17.4470, lng: 78.5123 },
    { name: "Wipro Lighting, Pune", lat: 18.5204, lng: 73.8567 },
  ];

  const initialCenter = { lat: 20.5937, lng: 78.9629 }; // India center
  const googleMapsApiKey = "AIzaSyDrBMkfagQMgCc4ZJl-1rSp4z38kKJgpOY"; // replace with your key

  return (
    <div>
      {/* <h1>LED Distributors Map - India</h1> */}
      <DynamicMap
        locations={locations}
        initialCenter={initialCenter}
        apiKey={googleMapsApiKey}
      />
    </div>
  );
};

export default Map;
