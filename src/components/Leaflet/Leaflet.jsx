import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

import VesselTracks from "./VesselTracks";
import { tilelayers } from "./constants";

const position = [51.505, -0.09];
const mapStyle = { height: "100vh" };

export default function Leaflet() {
  return (
    <MapContainer center={position} zoom={3} style={mapStyle} maxZoom={20}>
      <LayersControl position="topright">
        {tilelayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
      </LayersControl>

      <VesselTracks />
    </MapContainer>
  );
}
