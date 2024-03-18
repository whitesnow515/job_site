const SearchForm2 = () => {
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
          placeholder="Your e-mail"
          required
        />
        <button
          type="button"
          id="subscribe-newslatters"
          className="theme-btn btn-style-two"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default SearchForm2;
