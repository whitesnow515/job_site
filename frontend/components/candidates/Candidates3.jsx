import Link from "next/link";
import candidates from "../../data/candidates";

const Candidates3 = () => {
  return (
    <>
      {candidates.slice(12, 17).map((candidate) => (
        <div
          className="candidate -type-1 col-xl-auto col-lg-3 col-md-6 col-sm-12"
          key={candidate.id}
        >
          <div className="image">
            <img src={candidate.avatar} alt="image" />
          </div>

          <div className="content">
            <h4>
              <Link href={`/candidates-single-v1/${candidate.id}`}>
                {candidate.name}
              </Link>
            </h4>
            <p>{candidate.designation}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Candidates3;
