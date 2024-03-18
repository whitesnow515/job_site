import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import companyData from "../../../data/topCompany";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDestination,
  addFoundationDate,
  addKeyword,
  addLocation,
  addPerPage,
  addSort,
} from "../../../features/filter/employerFilterSlice";

const FilterTopBox = () => {
  const {
    keyword,
    location,
    destination,
    category,
    foundationDate,
    sort,
    perPage,
  } = useSelector((state) => state.employerFilter) || {};
  const dispatch = useDispatch();

  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location?.toLowerCase().includes(location?.toLowerCase())
      : item;

  // destination filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // foundation date filter
  const foundationDataFilter = (item) =>
    item?.foundationDate?.min >= foundationDate?.min &&
    item?.foundationDate?.max <= foundationDate?.max;

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = companyData
    ?.slice(perPage.start !== 0 && 12, perPage.end !== 0 ? perPage.end : 20)
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    ?.filter(destinationFilter)
    ?.filter(categoryFilter)
    ?.filter(foundationDataFilter)
    ?.sort(sortFilter)
    ?.map((company) => (
      <div className="company-block-three" key={company.id}>
        <div className="inner-box">
          <div className="content">
            <div className="content-inner">
              <span className="company-logo">
                <img src={company.img} alt="company brand" />
              </span>
              <h4>
                <Link href={`/employers-single-v1/${company.id}`}>
                  {company.name}
                </Link>
              </h4>
              <ul className="job-info">
                <li>
                  <span className="icon flaticon-map-locator"></span>{" "}
                  {company.location}
                </li>
                <li>
                  <span className="icon flaticon-briefcase"></span>{" "}
                  {company.jobType}
                </li>
              </ul>
            </div>

            <ul className="job-other-info">
              {company.isFeatured ? <li className="privacy">Featured</li> : ""}

              <li className="time">Open Jobs – {company.jobNumber}</li>
            </ul>
          </div>

          <div className="text">{company.jobDetails}</div>

          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>
        </div>
      </div>
    ));

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // clear handler
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(addFoundationDate({ min: 1900, max: 2028 }));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{content?.length}</strong> jobs
          </div>
        </div>
        {/* End showing-result */}

        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          destination.min !== 0 ||
          destination.max !== 100 ||
          category !== "" ||
          foundationDate.min !== 1900 ||
          foundationDate.max !== 2028 ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{
                minHeight: "45px",
                marginBottom: "15px",
              }}
            >
              Clear All
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          {/* End select */}

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 "
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              All
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 10,
              })}
            >
              10 per page
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              20 per page
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 24,
              })}
            >
              24 per page
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      {content}

      <ListingShowing />
      {/* <!-- Listing Show More --> */}
    </>
  );
};

export default FilterTopBox;
