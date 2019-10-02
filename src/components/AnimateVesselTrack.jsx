import React from 'react';
import 'leaflet.animatedmarker/src/AnimatedMarker';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { withLeaflet } from 'react-leaflet';
import Control from 'react-leaflet-control';
import { customMarker } from '../constants/customMarker';
import styles from '../styles/AnimateVesselTrack.module.sass';

let line;
let animatedMarker;

const AnimateVesselTrack = ({ leaflet: { map }, latlngs }) => {
    const stopAndRemove = () => {
        if (animatedMarker) {
            animatedMarker.stop();
            map.removeLayer(animatedMarker);
            line.removeFrom(map);
        }
    };

    const startAnimation = () => {
        line = L.polyline(latlngs, {
            color: '#02929b',
            weight: 1.5
        }).addTo(map);

        animatedMarker = L.animatedMarker(line.getLatLngs(), {
            icon: customMarker,
            distance: 500,
            interval: 2000,
            onEnd: () => stopAndRemove()
        });

        map.addLayer(animatedMarker);

        animatedMarker.on('move', () => {
            console.log('moving....');
        });
    };

    const stopAnimation = () => stopAndRemove();

    return (
        <>
            <Control position="topleft">
                <button
                    type="button"
                    className={styles.animateControl}
                    onClick={() => startAnimation()}>
                    Start animation
                </button>
            </Control>
            <Control position="topleft">
                <button
                    type="button"
                    className={styles.animateControl}
                    onClick={() => stopAnimation()}>
                    Stop animation
                </button>
            </Control>
        </>
    );
};

AnimateVesselTrack.propTypes = {
    leaflet: PropTypes.shape({
        map: PropTypes.object,
        layerContainer: PropTypes.object
    }).isRequired,
    latlngs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default withLeaflet(AnimateVesselTrack);
