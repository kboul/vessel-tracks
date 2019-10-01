import L from 'leaflet';
import { withLeaflet } from 'react-leaflet';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';

const VesselTracks = ({ leaflet: { map } }) => {
    console.log(map);
    const [vesselTracks] = useVesselTracks();
    console.log(vesselTracks);

    vesselTracks.forEach(track => {
        const lat = parseFloat(track.LAT);
        const lon = parseFloat(track.LON);
        L.marker([lat, lon], { icon: customMarker }).addTo(map);
    });

    return null;
};

export default withLeaflet(VesselTracks);
