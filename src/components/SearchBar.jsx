function SearchBar({ searchText, setSearchText }) {
  return (
    <label className="field search-field">
      <span>Search hotels</span>
      <input
        type="search"
        value={searchText}
        placeholder="Search by hotel name or city"
        onChange={(event) => setSearchText(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;
