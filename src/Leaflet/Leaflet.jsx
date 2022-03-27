import { Map, TileLayer, LayersControl } from "react-leaflet";

import VesselTracks from "./VesselTracks";
import { tilelayers } from "./constants";
import { idGenerator } from "./utils";

const position = [51.505, -0.09];
const mapStyle = { height: "100vh" };

export default function Leaflet() {
  return (
    <Map center={position} zoom={3} style={mapStyle} maxZoom={20}>
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
}
