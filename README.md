# street-food-locator

The app is based on the React + Vite template providing a minimal setup to get React working in Vite with HMR and some ESLint rules.

This is a street food locator app, where you can find food trucks on the map and see truck details (name, food, and address).

For presenting the interactive map I use **leaflet** library, with custom markers for different types of food trucks. Initial map position is hardcoded as a constant (otherwise I'd prefer to use geopositioning).

For speed I use the sequence number of the data item as an id prop, I'm aware it's not a good practice, but I couldn't find another unique identifier among table data (maybe need to look closer).

For styling I use TailwindCSS but only basic styles are applied here.

If I had more time, I'd love to add search functionality to enable users to search only their favorite food, and show a section with a few of the closest locations.

