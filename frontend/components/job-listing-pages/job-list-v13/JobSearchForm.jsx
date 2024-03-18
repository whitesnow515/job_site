import Categories from "../components/Categories";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";

const JobSearchForm = () => {
  return (
    <div className="job-search-form style-two">
      <div className="row">
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <SearchBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <LocationBox />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <Categories />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button type="submit" className="theme-btn btn-style-three">
            Find Jobs
          </button>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </div>
    // End job Search form
  );
};

export default JobSearchForm;
