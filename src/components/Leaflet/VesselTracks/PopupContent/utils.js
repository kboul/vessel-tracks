/**
 *
 * @param {Object}
 * @returns {Array<Object>}
 */

export const vesselTrackMetadata = ({
  COURSE,
  HEADING,
  LAT,
  LON,
  MMSI,
  SHIP_ID,
  SPEED,
  STATUS,
  TIMESTAMP,
}) => {
  return [
    { name: "COURSE", value: COURSE },
    { name: "HEADING", value: HEADING },
    { name: "LAT", value: LAT },
    { name: "LON", value: LON },
    { name: "MMSI", value: MMSI },
    { name: "SHIP_ID", value: SHIP_ID },
    { name: "SPEED (knots x10)", value: SPEED },
    { name: "STATUS", value: STATUS },
    { name: "TIME (UTC)", value: TIMESTAMP },
  ];
};
