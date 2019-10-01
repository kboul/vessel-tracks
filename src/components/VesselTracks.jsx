import L from 'leaflet';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';

const VesselTracks = ({ leaflet: { map } }) => {
    const [vesselTracks] = useVesselTracks();
    console.log(vesselTracks);

    vesselTracks.forEach(track => {
        const lat = parseFloat(track.LAT);
        const lon = parseFloat(track.LON);
        L.marker([lat, lon], { icon: customMarker }).addTo(map);
    });

    return null;
};

VesselTracks.propTypes = {
    leaflet: PropTypes.shape({
        map: PropTypes.object,
        layerContainer: PropTypes.object
    }).isRequired
};

export default withLeaflet(VesselTracks);
