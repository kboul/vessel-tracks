import React from 'react';
import PropTypes from 'prop-types';
import { vesselTrackMetadata } from './utils';
import { idGenerator } from '../../utils';
import styles from './index.module.sass';

const PopupContent = ({ vesselTrack }) => {
    return (
        <table className={styles.table}>
            {vesselTrackMetadata(vesselTrack).map(({ name, value }) => {
                return (
                    <tr key={idGenerator()} className={styles.tr}>
                        <th className={styles.th}>{name}:</th>
                        <td className={styles.td}>{value}</td>
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
