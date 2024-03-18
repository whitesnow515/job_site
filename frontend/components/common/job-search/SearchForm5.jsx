import Router from "next/router";

const SearchForm5 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row justify-content-center justify-content-md-between">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-9">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Job title, keywords, or company"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-auto">
          <button
            type="submit"
            className="theme-btn btn-style-two"
            onClick={() => Router.push("/job-list/job-list-v9")}
          >
            Find Jobs
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm5;
