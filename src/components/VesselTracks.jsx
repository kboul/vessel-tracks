import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import PopupContent from './PopupContent';
import Spinner from './Spinner';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';

const mcg = L.markerClusterGroup();

const VesselTracks = ({ leaflet: { map } }) => {
    const [vesselTracks, loading] = useVesselTracks();

    useEffect(() => {
        vesselTracks.forEach((vesselTrack, id) => {
            const lat = parseFloat(vesselTrack.LAT);
            const lon = parseFloat(vesselTrack.LON);

            L.marker(new L.LatLng(lat, lon), {
                icon: customMarker
            })
                .addTo(mcg)
                .bindPopup(
                    ReactDOMServer.renderToString(
                        <PopupContent vesselTrack={vesselTrack} />
                    )
                );

            if (vesselTracks.length - 1 === id) {
                console.log(vesselTracks);
                // fit the map bounds to the mcg relative coords
                map.fitBounds(mcg.getBounds());
                // add the marker cluster group to the map
                map.addLayer(mcg);
            }
        });
    }, [vesselTracks, map]);

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
