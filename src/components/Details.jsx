import PropTypes from "prop-types";
export default function Details({ data }) {
    if (!data) {
        return (
            <div className="p-4 rounded shadow min-h-full flex items-center justify-center flex-col">
                <p className="opacity-70">
                    Please click on a map marker to see more details.
                </p>
                <img
                    className="size-28 mt-4 opacity-70"
                    src="assets/taco.png"
                />
            </div>
        );
    } else {
        return (
            <div className="p-4 rounded shadow min-h-full text-center">
                <h2 className="text-lg font-semibold mb-4">{data.name}</h2>
                <p className="mb-4">{data.food}</p>
                <address className="flex justify-center">
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                    >
                        <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {data.address}
                </address>
            </div>
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
