import React from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import VesselTracks from './VesselTracks';
import tilelayers from '../constants/tilelayers';
import { idGenerator } from '../utils/idGenerator';

const position = [51.505, -0.09];
const mapStyle = { height: '100vh' };

const Leaflet = () => {
    return (
        <Map center={position} zoom={3} style={mapStyle} maxZoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LayersControl position="topright">
                {tilelayers.map(({ name, attribution, url, checked }) => (
                    <LayersControl.BaseLayer
                        key={idGenerator()}
                        name={name}
                        checked={checked}>
                        <TileLayer attribution={attribution} url={url} />
                    </LayersControl.BaseLayer>
                ))}
            </LayersControl>

            <VesselTracks />
        </Map>
    );
};

export default Leaflet;
