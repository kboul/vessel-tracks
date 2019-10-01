import { useState, useEffect } from 'react';
import { getVesselTracksService } from '../services/getVesselTracksService';

const useVesselTracks = () => {
    const [vesselTracks, setVesselTracks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            const getVesselTracks = await getVesselTracksService();
            setVesselTracks(getVesselTracks);
            setLoading(false);
        })();
    }, []);

    return [vesselTracks, loading];
};

export default useVesselTracks;
