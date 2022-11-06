import "leaflet.animatedmarker/src/AnimatedMarker";
import L from "leaflet";
import PropTypes from "prop-types";
import { useMap } from "react-leaflet";

import { customMarker } from "../../constants";
import styles from "./styles.module.sass";

let line;
let animatedMarker;

export default function AnimateVesselTrack({ latlngs }) {
  const map = useMap();

  const stopAnimAndRemovePath = () => {
    if (map && animatedMarker) {
      console.log("ending animation...");
      animatedMarker.stop();
      map.removeLayer(animatedMarker);
      line.removeFrom(map);
    }
  };

  const startAnimation = () => () => {
    if (!map) return;

    line = L.polyline(latlngs, {
      color: "#02929b",
      weight: 1.5,
    }).addTo(map);

    animatedMarker = L.animatedMarker(line.getLatLngs(), {
      icon: customMarker,
      distance: 500,
      interval: 2000,
      onEnd: stopAnimAndRemovePath,
    });

    map.addLayer(animatedMarker);

    animatedMarker.on("move", () => {
      console.log("moving....");
    });
  };

  const stopAnimation = () => () => stopAnimAndRemovePath();

  return (
    <>
      <button
        type="button"
        className={styles.startAnimation}
        onClick={startAnimation()}>
        Start animation
      </button>
      <button
        type="button"
        className={styles.stopAnimation}
        onClick={stopAnimation()}>
        Stop animation
      </button>
    </>
  );
}

AnimateVesselTrack.propTypes = {
  latlngs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};
