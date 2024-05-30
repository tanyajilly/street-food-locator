import { useState, useCallback, useMemo } from "react";
import Search from "./Search";
import Map from "./Map";
import Details from "./Details";
import { useFetchTrucks } from "../hooks/useFetchTrucks";

export default function Main() {
    const { data, error, loading } = useFetchTrucks();
    const [selectedTruck, setSelectedTruck] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const displayedData = useMemo(() => {
        if (!data) return [];
        return data.filter((item) => item.food.includes(searchQuery));
    }, [data, searchQuery]);

    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    const handleMarkerClick = (id) => {
        setSelectedTruck(data.find((el) => el.id === id));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading data: {error.message}</div>;

    return (
        <>
            <div className="max-w-80 mx-auto mb-4">
                <Search onSearch={handleSearch} />
            </div>
            <div className="md:flex">
                <div className="flex-1 overflow-hidden rounded-lg">
                    <Map
                        items={displayedData}
                        onMarkerClick={handleMarkerClick}
                    />
                </div>
                <div className="flex-1 mt-6 md:ml-10 md:mt-0">
                    <Details data={selectedTruck} />
                </div>
            </div>
        </>
    );
}
