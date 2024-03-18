const PrivateMessageBox = () => {
  return (
    <form className="default-form ">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input type="text" name="username" placeholder="Your Name" required />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
          >
            Send Message
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PrivateMessageBox;
