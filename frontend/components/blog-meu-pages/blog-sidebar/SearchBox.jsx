const SearchBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="form-group">
        <span className="icon flaticon-search-1"></span>
        <input
          type="search"
          name="search-field"
          placeholder="keywords"
          required
        />
      </div>
    </form>
  );
};

export default SearchBox;
