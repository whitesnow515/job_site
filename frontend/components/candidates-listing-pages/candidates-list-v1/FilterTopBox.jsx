import Link from "next/link";
import ListingShowing from "../components/ListingShowing";
import candidatesData from "../../../data/candidates";
import { useDispatch, useSelector } from "react-redux";
import {
    addCandidateGender,
    addCategory,
    addDatePost,
    addDestination,
    addKeyword,
    addLocation,
    addPerPage,
    addSort,
    clearExperienceF,
    clearQualificationF,
} from "../../../features/filter/candidateFilterSlice";
import {
    clearDatePost,
    clearExperience,
    clearQualification,
} from "../../../features/candidate/candidateSlice";

const FilterTopBox = () => {
    const {
        keyword,
        location,
        destination,
        category,
        candidateGender,
        datePost,
        experiences,
        qualifications,
        sort,
        perPage,
    } = useSelector((state) => state.candidateFilter) || {};

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
            ? item?.category?.toLocaleLowerCase() ===
              category?.toLocaleLowerCase()
            : item;

    // gender filter
    const genderFilter = (item) =>
        candidateGender !== ""
            ? item?.gender.toLocaleLowerCase() ===
                  candidateGender.toLocaleLowerCase() && item
            : item;

    // date-posted filter
    const datePostedFilter = (item) =>
        datePost !== "all" && datePost !== ""
            ? item?.created_at
                  ?.toLocaleLowerCase()
                  .split(" ")
                  .join("-")
                  .includes(datePost)
            : item;

    // experience filter
    const experienceFilter = (item) =>
        experiences?.length !== 0
            ? experiences?.includes(
                  item?.experience?.split(" ").join("-").toLocaleLowerCase()
              )
            : item;

    // qualification filter
    const qualificationFilter = (item) =>
        qualifications?.length !== 0
            ? qualifications?.includes(
                  item?.qualification?.split(" ").join("-").toLocaleLowerCase()
              )
            : item;

    // sort filter
    const sortFilter = (a, b) =>
        sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

    let content = candidatesData
        ?.slice(perPage.start, perPage.end === 0 ? 10 : perPage.end)
        ?.filter(keywordFilter)
        ?.filter(locationFilter)
        ?.filter(destinationFilter)
        ?.filter(categoryFilter)
        ?.filter(genderFilter)
        ?.filter(datePostedFilter)
        ?.filter(experienceFilter)
        ?.filter(qualificationFilter)
        ?.sort(sortFilter)
        ?.map((candidate) => (
            <div className="candidate-block-three" key={candidate.id}>
                <div className="inner-box">
                    <div className="content">
                        <figure className="image">
                            <img src={candidate.avatar} alt="candidates" />
                        </figure>
                        <h4 className="name">
                            <Link
                                href={`/candidates-single-v1/${candidate.id}`}
                            >
                                {candidate.name}
                            </Link>
                        </h4>

                        <ul className="candidate-info">
                            <li className="designation">
                                {candidate.designation}
                            </li>
                            <li>
                                <span className="icon flaticon-map-locator"></span>{" "}
                                {candidate.location}
                            </li>
                            <li>
                                <span className="icon flaticon-money"></span> $
                                {candidate.hourlyRate} / hour
                            </li>
                        </ul>
                        {/* End candidate-info */}

                        <ul className="post-tags">
                            {candidate.tags.map((val, i) => (
                                <li key={i}>
                                    <a href="#">{val}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* End content */}

                    <div className="btn-box">
                        <button className="bookmark-btn me-2">
                            <span className="flaticon-bookmark"></span>
                        </button>
                        {/* End bookmark-btn */}

                        <Link
                            href={`/candidates-single-v1/${candidate.id}`}
                            className="theme-btn btn-style-three"
                        >
                            <span className="btn-title">View Profile</span>
                        </Link>
                    </div>
                    {/* End btn-box */}
                </div>
            </div>
        ));

    // sort handler
    const sortHandler = (e) => {
        dispatch(addSort(e.target.value));
    };

    // per page handler
    const perPageHandler = (e) => {
        const pageData = JSON.parse(e.target.value);
        dispatch(addPerPage(pageData));
    };

    // clear handler
    const clearHandler = () => {
        dispatch(addKeyword(""));
        dispatch(addLocation(""));
        dispatch(addDestination({ min: 0, max: 100 }));
        dispatch(addCategory(""));
        dispatch(addCandidateGender(""));
        dispatch(addDatePost(""));
        dispatch(clearDatePost());
        dispatch(clearExperienceF());
        dispatch(clearExperience());
        dispatch(clearQualification());
        dispatch(clearQualificationF());
        dispatch(addSort(""));
        dispatch(addPerPage({ start: 0, end: 0 }));
    };

    return (
        <>
            <div className="ls-switcher">
                <div className="showing-result">
                    <div className="show-1023">
                        <button
                            type="button"
                            className="theme-btn toggle-filters "
                            data-bs-toggle="offcanvas"
                            data-bs-target="#filter-sidebar"
                        >
                            <span className="icon icon-filter"></span> Filter
                        </button>
                    </div>
                    {/* Collapsible sidebar button */}

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
                    candidateGender !== "" ||
                    datePost !== "" ||
                    experiences?.length !== 0 ||
                    qualifications?.length !== 0 ||
                    sort !== "" ||
                    perPage?.start !== 0 ||
                    perPage?.end !== 0 ? (
                        <button
                            className="btn btn-danger text-nowrap me-2"
                            style={{ minHeight: "45px", marginBottom: "15px" }}
                            onClick={clearHandler}
                        >
                            Clear All
                        </button>
                    ) : undefined}

                    <select
                        onChange={sortHandler}
                        className="chosen-single form-select"
                        value={sort}
                    >
                        <option value="">Sort by (default)</option>
                        <option value="asc">Newest</option>
                        <option value="des">Oldest</option>
                    </select>
                    {/* End select */}

                    <select
                        className="chosen-single form-select ms-3 "
                        onChange={perPageHandler}
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
                                end: 15,
                            })}
                        >
                            15 per page
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
                                end: 25,
                            })}
                        >
                            25 per page
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
