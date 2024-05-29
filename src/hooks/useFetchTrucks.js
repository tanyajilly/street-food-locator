import { useState, useEffect } from "react";
import { fetchCsvData } from "../utils/csvUtils";

export const useFetchTrucks = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const csvData = await fetchCsvData();
                const filteredData = csvData
                    .filter(
                        (item) =>
                            item.Status === "APPROVED" && item.Latitude !== "0"
                    )
                    .map((item) => ({
                        name: item.Applicant,
                        type: item.FacilityType,
                        id: item.locationid,
                        food: item.FoodItems,
                        location: [item.Latitude, item.Longitude],
                        address: item.Address,
                    }));
                setData(filteredData);
            } catch (error) {
                console.error("Error loading CSV data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, error, loading };
};
