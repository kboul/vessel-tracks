import { useState, useEffect } from "react";

import { getVesselTracksService } from "./api";
import mockData from "./mock/data.json";

export default function useVesselTracksFetcher() {
  const [vesselTracks, setVesselTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsError(false);

    const fetchVesselTracks = async () => {
      try {
        const data = await getVesselTracksService();
        if (data.length > 0) setVesselTracks(data);
      } catch (error) {
        setIsError(true);
        setVesselTracks(mockData);
      }
      setLoading(false);
    };

    fetchVesselTracks();
  }, []);

  return [vesselTracks, loading, isError];
}
