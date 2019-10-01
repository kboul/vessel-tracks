import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PopupContent.css';

const PopupContent = ({
    vesselTrack: {
        COURSE,
        HEADING,
        LAT,
        LON,
        MMSI,
        SHIP_ID,
        SPEED,
        STATUS,
        TIMESTAMP
    }
}) => {
    return (
        <table>
            <tr>
                <th>COURSE:</th>
                <td>{COURSE}</td>
            </tr>
            <tr>
                <th>HEADING:</th>
                <td>{HEADING}</td>
            </tr>
            <tr>
                <th>LAT:</th>
                <td>{LAT}</td>
            </tr>
            <tr>
                <th>LON:</th>
                <td>{LON}</td>
            </tr>
            <tr>
                <th>MMSI:</th>
                <td>{MMSI}</td>
            </tr>
            <tr>
                <th>SHIP_ID:</th>
                <td>{SHIP_ID}</td>
            </tr>
            <tr>
                <th>SPEED:</th>
                <td>{SPEED}</td>
            </tr>
            <tr>
                <th>STATUS:</th>
                <td>{STATUS}</td>
            </tr>
            <tr>
                <th>TIME:</th>
                <td>{TIMESTAMP}</td>
            </tr>
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
