import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import VesselTracks from './VesselTracks';

const position = [51.505, -0.09];
const mapStyle = { height: '100vh' };

const Leaflet = () => {
    return (
        <Map center={position} zoom={3} style={mapStyle}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <VesselTracks />
        </Map>
    );
};

export default Leaflet;
