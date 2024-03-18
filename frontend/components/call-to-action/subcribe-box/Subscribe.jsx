const Subscribe = ({ btnStyle = "" }) => {
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
          className={`theme-btn ${btnStyle}`}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
