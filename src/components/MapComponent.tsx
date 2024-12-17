"use client"; 
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction des icônes Leaflet par défaut (bug connu avec React-Leaflet)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapComponent = () => {

  const [stations, setStations] = useState<any[]>([]);

  // Récupération des données des stations de vélos

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get
        (
          'https://api.citybik.es/v2/networks/citi-bike-nyc'
        );
        const stationData = response.data.network.stations;
        setStations(stationData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[40.7128, -74.0060]} // Coordonnées de New York City
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {stations.map((station, index) => (
          <Marker
            key={index}
            position={[station.latitude, station.longitude]} // Coordonnées de la station
          >
            <Popup>
              <strong>{station.name}</strong> <br />
              Vélos disponibles : {station.free_bikes}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );

};

export default MapComponent;
