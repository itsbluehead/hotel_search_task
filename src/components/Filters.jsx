function Filters({
  locations,
  selectedLocation,
  setSelectedLocation,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  maxRating,
  setMaxRating,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="filters" aria-label="Hotel filters">
      <label className="field">
        <span>Location</span>
        <select
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
        >
          <option value="all">All locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Min price</span>
        <input
          type="number"
          min="0"
          value={minPrice}
          placeholder="Any min"
          onChange={(event) => setMinPrice(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Max price</span>
        <input
          type="number"
          min="0"
          value={maxPrice}
          placeholder="Any price"
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Min rating</span>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={minRating}
          placeholder="Any min"
          onChange={(event) => setMinRating(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Max rating</span>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={maxRating}
          placeholder="Any max"
          onChange={(event) => setMaxRating(event.target.value)}
        />
      </label>

      <label className="field">
        <span>Sort by</span>
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="recommended">Recommended</option>
          <option value="price-low">Price: low to high</option>
          <option value="price-high">Price: high to low</option>
          <option value="rating-high">Rating: high to low</option>
          <option value="name">Name</option>
        </select>
      </label>
    </section>
  );
}

export default Filters;
