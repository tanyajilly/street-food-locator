import PropTypes from "prop-types";
export default function Details({ data }) {
    if (!data) {
        return <p>Please click on a map marker to see more details</p>;
    } else {
        return (
            <>
                <h2 className="text-lg font-medium mb-2">{data.name}</h2>
                <p className="mb-4">{data.food}</p>
                <address>{data.address}</address>
            </>
        );
    }
}

Details.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        location: PropTypes.arrayOf(PropTypes.string).isRequired,
        name: PropTypes.string,
        address: PropTypes.string,
        food: PropTypes.string,
    }),
};
