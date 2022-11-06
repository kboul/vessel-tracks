import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.animatedmarker/src/AnimatedMarker";
import { useLeaflet } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";

import AnimateVesselTrack from "./AnimateVesselTrack";
import PopupContent from "./PopupContent";
import Spinner from "../../Spinner";
import { getVesselTracksService } from "./api";
import { customMarker } from "../constants";

const mcg = L.markerClusterGroup();
const latlngs = [];

export default function VesselTracks() {
  const { map } = useLeaflet();
  const { data: vesselTracks, isLoading } = useQuery(
    ["vesselTracks"],
    getVesselTracksService
  );

  useEffect(() => {
    if (!map || !vesselTracks) return;

    vesselTracks.forEach((vesselTrack) => {
      const lat = parseFloat(vesselTrack.LAT);
      const lon = parseFloat(vesselTrack.LON);

      L.marker(new L.LatLng(lat, lon), {
        icon: customMarker,
      })
        .addTo(mcg)
        .bindPopup(
          ReactDOMServer.renderToString(
            <PopupContent vesselTrack={vesselTrack} />
          )
        );

      latlngs.push([lat, lon]);

      // fit the map bounds to the mcg relative coords
      map.fitBounds(mcg.getBounds());
      // add the marker cluster group to the map
      map.addLayer(mcg);
    });
  }, [vesselTracks, map]);

  if (isLoading) return <Spinner />;

  return <AnimateVesselTrack latlngs={latlngs} />;
}
