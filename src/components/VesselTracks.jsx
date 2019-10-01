import React from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import Spinner from './Spinner';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';
import PopupContent from './PopupContent';

const fg = L.featureGroup();

const VesselTracks = ({ leaflet: { map } }) => {
    const [vesselTracks, loading] = useVesselTracks();
    // console.log(vesselTracks);

    vesselTracks.forEach((vesselTrack, id) => {
        const lat = parseFloat(vesselTrack.LAT);
        const lon = parseFloat(vesselTrack.LON);

        L.marker([lat, lon], { icon: customMarker })
            .addTo(fg)
            .bindPopup(
                ReactDOMServer.renderToString(
                    <PopupContent vesselTrack={vesselTrack} />
                )
            );

        if (vesselTracks.length - 1 === id) {
            fg.addTo(map);
            map.fitBounds(fg.getBounds());
        }
    });

    if (loading) return <Spinner />;

    return null;
};

VesselTracks.propTypes = {
    leaflet: PropTypes.shape({
        map: PropTypes.object,
        layerContainer: PropTypes.object
    }).isRequired
};

export default withLeaflet(VesselTracks);
