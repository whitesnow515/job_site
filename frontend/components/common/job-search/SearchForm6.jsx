import Router from "next/router";

const SearchForm6 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row" style={{ marginBottom: "-60px"}}>
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon">
            <svg
              aria-hidden="true"
              width="30px"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
              class="Svg-sc-t66izd-0 Icon__Svg-sc-1yrtjf1-0  cazQux">
              <path d="M20.3 20.3a.99.99 0 0 1-1.4 0l-5.6-5.6A6.096 6.096 0 0 1 9.5 16c-1.817 0-3.354-.629-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.613C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.629 4.613 1.887C15.371 6.146 16 7.683 16 9.5a6.096 6.096 0 0 1-1.3 3.8l5.6 5.6a.99.99 0 0 1 0 1.4zM9.5 14c1.25 0 2.313-.437 3.188-1.312S14 10.75 14 9.5c0-1.25-.437-2.313-1.312-3.188S10.75 5 9.5 5c-1.25 0-2.313.437-3.188 1.312S5 8.25 5 9.5c0 1.25.437 2.313 1.312 3.188S8.25 14 9.5 14z"></path>
            </svg>
          </span>
          <input
            type="text"
            name="field_name"
            placeholder="Job title, keywords, or company"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-5 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="City or postcode" />
          <span
            className="icon flaticon-map-locator"
            style={{
              position: "absolute",
              left: "unset",
              right: "0px",
            }}></span>
        </div>

        {/* <!-- Form Group --> */}
        <div
          className="form-group col text-right"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <button
            type="submit"
            className="theme-btn btn-style-one"
            style={{ borderRadius: "20px" }}
            onClick={() => Router.push("/job-list/job-list-v3")}>
            Search
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          paddingTop: "15px",
          paddingRight: "0px",
        }}>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "5px",
          }}>


          <div className="">
            <div
              className=""
              style={{
                border: "solid 1px #616161",
                borderRadius: "25px",
                padding: "6px",
                marginRight: "1px",
              }}>
              <div className="">
                <svg
                  aria-hidden="true"
                  width="25px"
                  fill="#616161"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="Svg-sc-t66izd-0 Icon__Svg-sc-1yrtjf1-0  cazQux">
                  <path d="M20.3 20.3a.99.99 0 0 1-1.4 0l-5.6-5.6A6.096 6.096 0 0 1 9.5 16c-1.817 0-3.354-.629-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.613C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.629 4.613 1.887C15.371 6.146 16 7.683 16 9.5a6.096 6.096 0 0 1-1.3 3.8l5.6 5.6a.99.99 0 0 1 0 1.4zM9.5 14c1.25 0 2.313-.437 3.188-1.312S14 10.75 14 9.5c0-1.25-.437-2.313-1.312-3.188S10.75 5 9.5 5c-1.25 0-2.313.437-3.188 1.312S5 8.25 5 9.5c0 1.25.437 2.313 1.312 3.188S8.25 14 9.5 14z"></path>
                </svg>
                <span
                  className=""
                  style={{ fontSize: "10pt", color: "#616161" }}>
                  Firmentyp
                </span>
              </div>
            </div>
          </div>

          <div className="">
            <div
              className=""
              style={{
                border: "solid 1px #616161",
                borderRadius: "25px",
                padding: "6px",
                marginRight: "1px",
              }}>
              <div className="">
                <svg
                  aria-hidden="true"
                  width="25px"
                  fill="#616161"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="Svg-sc-t66izd-0 Icon__Svg-sc-1yrtjf1-0  cazQux">
                  <path d="M20.3 20.3a.99.99 0 0 1-1.4 0l-5.6-5.6A6.096 6.096 0 0 1 9.5 16c-1.817 0-3.354-.629-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.613C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.629 4.613 1.887C15.371 6.146 16 7.683 16 9.5a6.096 6.096 0 0 1-1.3 3.8l5.6 5.6a.99.99 0 0 1 0 1.4zM9.5 14c1.25 0 2.313-.437 3.188-1.312S14 10.75 14 9.5c0-1.25-.437-2.313-1.312-3.188S10.75 5 9.5 5c-1.25 0-2.313.437-3.188 1.312S5 8.25 5 9.5c0 1.25.437 2.313 1.312 3.188S8.25 14 9.5 14z"></path>
                </svg>
                <span
                  className=""
                  style={{ fontSize: "10pt", color: "#616161" }}>
                  Branche
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm6;
