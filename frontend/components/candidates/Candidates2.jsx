import Link from "next/link";
import candidates from "../../data/candidates";

const Candidates2 = () => {
  return (
    <>
      {candidates.slice(0, 6).map((candidate) => (
        <div
          className="candidate-block-two col-lg-6 col-md-12 col-sm-12"
          key={candidate.id}
        >
          <div className="inner-box">
            <div className="content-box">
              <figure className="image">
                <img src={candidate.avatar} alt="avatar" />
              </figure>
              <h4 className="name">{candidate.name}</h4>
              <span className="designation">{candidate.designation}</span>
              <div className="location">
                <i className="flaticon-map-locator"></i> {candidate.location}
              </div>
            </div>
            {/* End .content-box */}
            <Link
              href={`/candidates-single-v1/${candidate.id}`}
              className="theme-btn btn-style-one"
            >
              <span className="btn-title">View Profile</span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Candidates2;
