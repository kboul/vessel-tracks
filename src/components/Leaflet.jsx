import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const position = [51.505, -0.09];

const customMarker = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});

const Leaflet = () => {
    return (
        <Map center={position} zoom={13} style={{ height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customMarker}>
                <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                </Popup>
            </Marker>
        </Map>
    );
};

export default Leaflet;
