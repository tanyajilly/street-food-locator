import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CURRENT_LOCATION as location } from "../constants";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

const truckIcon = new L.Icon({
    iconUrl: "assets/food-truck.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

const cartIcon = new L.Icon({
    iconUrl: "assets/cargo-bike.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

export default function Map({ items, onMarkerClick }) {
    return (
        <MapContainer center={location} zoom={13} style={{ height: "400px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {items.map(({ id, location, type, name }) => (
                <Marker
                    key={id}
                    position={location}
                    icon={type === "Truck" ? truckIcon : cartIcon}
                    eventHandlers={{
                        click: () => onMarkerClick(id),
                    }}
                >
                    <Popup>{name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

Map.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            location: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    onMarkerClick: PropTypes.func.isRequired,
};
