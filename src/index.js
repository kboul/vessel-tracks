import { createRoot } from "react-dom/client";

import "./index.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
