import React from 'react';
import PropTypes from 'prop-types';
import { vesselTrackMetadata } from '../utils/vesselTrackMetadata';
import { idGenerator } from '../utils/idGenerator';
import '../styles/PopupContent.css';

const PopupContent = ({ vesselTrack }) => {
    return (
        <table>
            {vesselTrackMetadata(vesselTrack).map(({ name, value }) => {
                return (
                    <tr key={idGenerator()}>
                        <th>{name}:</th>
                        <td>{value}</td>
                    </tr>
                );
            })}
        </table>
    );
};

PopupContent.propTypes = {
    vesselTrack: PropTypes.shape({
        COURSE: PropTypes.string,
        HEADING: PropTypes.string,
        LAT: PropTypes.string,
        LON: PropTypes.string,
        MMSI: PropTypes.string,
        SHIP_ID: PropTypes.string,
        SPEED: PropTypes.string,
        STATUS: PropTypes.string,
        TIMESTAMP: PropTypes.string
    }).isRequired
};

export default PopupContent;
