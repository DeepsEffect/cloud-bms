import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const Location = () => {
  // Set up the default icon for markers
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <header className="bg-white lg:mt-10">
      <div className="container flex justify-evenly px-6 py-4 mx-auto space-y-6 flex-col md:h-128 md:py-16 lg:flex-row-reverse md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium font-heading tracking-wide text-gray-800 dark:text-white md:text-4xl">
              Location of the Building
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Located in a vibrant neighborhood, this building offers the
              perfect blend of city convenience and peaceful surroundings. Enjoy
              easy access to shops, restaurants, and entertainment nearby.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-500 rounded-md md:inline hover:bg-primary-400"
              >
                View Details about the location
              </a>
            </div>
          </div>
        </div>

        {/* map section */}
        <MapContainer
          center={[40.754932, -73.984016]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[400px] border md:w-[40%]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.754932, -73.984016]}>
            <Popup>Definitely a real location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </header>
  );
};

export default Location;
