import { useEffect, useState } from "react";
import Search from "./Search";
import FacilityType from "./FacilityType";
import Map from "./Map";
import Details from "./Details";
import { fetchCsvData } from "../utils/csvUtils";

export default function Main() {
    const [data, setData] = useState([]);
    const [selectedTruck, setSelectedTruck] = useState(null);

    const handleMarkerClick = (id) => {
        setSelectedTruck(data.find((el) => el.id === id));
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const csvData = await fetchCsvData();
                const filteredData = csvData
                    .filter(
                        (item) =>
                            item.Status === "APPROVED" && item.Latitude !== "0"
                    )
                    .map((item, i) => {
                        return {
                            name: item.Applicant,
                            type: item.FacilityType,
                            id: i,
                            food: item.FoodItems,
                            location: [item.Latitude, item.Longitude],
                            address: item.Address,
                        };
                    });
                setData(filteredData);
            } catch (error) {
                console.error("Error loading CSV data:", error);
            }
        };

        loadData();
    }, []);

    return (
        <>
            {/* <div className="flex mb-4">
                <Search />
                <FacilityType />
            </div> */}
            <div className="md:flex">
                <div className="flex-1 overflow-hidden rounded-lg">
                    <Map items={data} onMarkerClick={handleMarkerClick} />
                </div>
                <div className="flex-1 mt-6 md:ml-20 md:mt-0">
                    <Details data={selectedTruck} />
                </div>
            </div>
        </>
    );
}
