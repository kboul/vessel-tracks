import httpService from '../../httpService';

export const getVesselTracksService = async () => {
    try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const endpoint = `${apiKey}/period:daily/days:10/mmsi:241486000/protocol:jsono`;
        const response = await httpService.get(endpoint);
        const { data } = response;
        return data;
    } catch (error) {
        console.log('There was an error while getting the earthquakes', error);
    }
};
