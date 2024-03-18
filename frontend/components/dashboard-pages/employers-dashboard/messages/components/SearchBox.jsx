const SearchBox = () => {
  return (
    <form method="post" action="#">
      <div className="form-group">
        <span className="icon flaticon-search-1"></span>
        <input
          type="search"
          name="search-field"
          placeholder="Search"
          required=""
        />
      </div>
    </form>
  );
};

export default SearchBox;
