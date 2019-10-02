import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import 'leaflet.markercluster/dist/leaflet.markercluster';
import 'leaflet.animatedmarker/src/AnimatedMarker';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import PopupContent from './PopupContent';
import Spinner from './Spinner';
import AnimateVesselTrack from './AnimateVesselTrack';
import useVesselTracks from '../hooks/useVesselTracks';
import { customMarker } from '../constants/customMarker';

const mcg = L.markerClusterGroup();
const latlngs = [];

const VesselTracks = ({ leaflet: { map } }) => {
    const [vesselTracks, loading] = useVesselTracks();

    useEffect(() => {
        console.log(vesselTracks);

        vesselTracks.forEach(vesselTrack => {
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

            latlngs.push([lat, lon]);

            // fit the map bounds to the mcg relative coords
            map.fitBounds(mcg.getBounds());
            // add the marker cluster group to the map
            map.addLayer(mcg);
        });
    }, [vesselTracks, map]);

    if (loading) return <Spinner />;

    return <AnimateVesselTrack latlngs={latlngs} />;
};

VesselTracks.propTypes = {
    leaflet: PropTypes.shape({
        map: PropTypes.object,
        layerContainer: PropTypes.object
    }).isRequired
};

export default withLeaflet(VesselTracks);
