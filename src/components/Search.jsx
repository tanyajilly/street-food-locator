import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export default function Search({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearch = useMemo(() => debounce(onSearch, 300), [onSearch]);
    useEffect(() => {
        debouncedSearch(searchValue);

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchValue, debouncedSearch]);
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <input
            className="p-2 border rounded-md w-full"
            type="text"
            placeholder="Search your favorite food"
            value={searchValue}
            onChange={handleChange}
        />
    );
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
