const WidgetToFilterBox = () => {
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form method="post" action="blog.html">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>Newest</option>
        <option>Last 12 Months</option>
        <option>Last 16 Months</option>
        <option>Last 24 Months</option>
        <option>Last 5 year</option>
      </select>
    </div>
  );
};

export default WidgetToFilterBox;
