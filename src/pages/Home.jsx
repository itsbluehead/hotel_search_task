import { useEffect, useState } from "react";
import Filters from "../components/Filters.jsx";
import HotelCard from "../components/HotelCard.jsx";
import Loader from "../components/Loader.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { getHotels } from "../services/api.js";
import { getHotelLocation } from "../utils/hotelHelpers.js";

const HOTELS_PER_PAGE = 6;

const sortParams = {
  recommended: "",
  "price-low": "price",
  "price-high": "-price",
  "rating-high": "-rating",
  name: "name",
};

function Home() {
  const [hotels, setHotels] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadHotels() {
      try {
        setLoading(true);
        const skip = (currentPage - 1) * HOTELS_PER_PAGE;
        const params = {
          limit: HOTELS_PER_PAGE,
          skip,
        };

        if (searchText.trim()) params.search = searchText.trim();
        if (selectedLocation !== "all") params.location = selectedLocation;
        if (minPrice) params.min_price = minPrice;
        if (maxPrice) params.max_price = maxPrice;
        if (minRating) params.min_rating = minRating;
        if (maxRating) params.max_rating = maxRating;
        if (sortParams[sortBy]) params.order_by = sortParams[sortBy];

        const result = await getHotels(params);
        setHotels(result.hotels);
        setTotalCount(result.count);
        setError("");
      } catch (err) {
        setError("Could not load hotels. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, [searchText, selectedLocation, minPrice, maxPrice, minRating, maxRating, sortBy, currentPage]);

  useEffect(() => {
    async function loadLocations() {
      try {
        const result = await getHotels({ limit: 1000, skip: 0 });
        const locations = result.hotels.map(getHotelLocation).filter(Boolean);
        setAllLocations([...new Set(locations)].sort());
      } catch (err) {
        setAllLocations([]);
      }
    }

    loadLocations();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, selectedLocation, minPrice, maxPrice, minRating, maxRating, sortBy]);

  const totalPages = Math.ceil(totalCount / HOTELS_PER_PAGE);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Simple hotel booking frontend</p>
          <h1>Find a stay that fits your trip.</h1>
          <p>
            Search hotels, filter by location and price, sort results, and open hotel details.
          </p>
        </div>
      </section>

      <section className="controls-panel">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <Filters
          locations={allLocations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minRating={minRating}
          setMinRating={setMinRating}
          maxRating={maxRating}
          setMaxRating={setMaxRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </section>

      {loading && <Loader />}
      {error && <p className="message error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="results-heading">
            <h2>Available hotels</h2>
            <p>{totalCount} result(s)</p>
          </div>

          {hotels.length > 0 ? (
            <div className="hotel-grid">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <p className="message">No hotels match your search.</p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;
