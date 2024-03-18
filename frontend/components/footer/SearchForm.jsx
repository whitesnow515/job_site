const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="form-group">
        <div className="response"></div>
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="email"
          placeholder="Email"
          required
        />
        <button type="button" id="subscribe-newslatters" className="theme-btn">
          <i className="flaticon-envelope"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
