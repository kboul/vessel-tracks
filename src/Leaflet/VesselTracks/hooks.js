import { useState, useEffect } from 'react';
import { getVesselTracksService } from './services';

const useVesselTracksFetcher = () => {
    const [vesselTracks, setVesselTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setIsError(false);

        const fetchVesselTracks = async () => {
            try {
                const data = await getVesselTracksService();
                setVesselTracks(data);
            } catch (error) {
                setIsError(true);
            }
            setLoading(false);
        };

        fetchVesselTracks();
    }, []);

    return [vesselTracks, loading, isError];
};

export default useVesselTracksFetcher;
