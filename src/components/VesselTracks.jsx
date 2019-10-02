import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import PopupContent from './PopupContent';
import Spinner from './Spinner';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';

const fg = L.featureGroup();
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
                .addTo(fg)
                .addTo(mcg)
                .bindPopup(
                    ReactDOMServer.renderToString(
                        <PopupContent vesselTrack={vesselTrack} />
                    )
                );

            if (vesselTracks.length - 1 === id) {
                console.log(vesselTracks);
                // add feature group to the map
                fg.addTo(map);
                // fit the map bounds to the markers relative coords
                map.fitBounds(fg.getBounds());
                // add the marker cluster group to the map
                map.addLayer(mcg);
            }
        });
    }, [vesselTracks]);

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
