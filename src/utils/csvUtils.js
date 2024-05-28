import Papa from "papaparse";
import { DATA_CSV } from "../constants";
export const fetchCsvData = async () => {
    const response = await fetch(DATA_CSV);
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, { header: true });
    return parsedData.data;
};
