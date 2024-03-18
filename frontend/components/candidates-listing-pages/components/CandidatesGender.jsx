import { useDispatch, useSelector } from "react-redux";
import { addCandidateGender } from "../../../features/filter/candidateFilterSlice";

const CandidatesGender = () => {
    const { candidateGender } =
        useSelector((state) => state.candidateFilter) || {};

    const dispath = useDispatch();

    // gender handler
    const genderHandler = (e) => {
        dispath(addCandidateGender(e.target.value));
    };

    return (
        <>
            <select
                className="form-select"
                value={candidateGender}
                onChange={genderHandler}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default CandidatesGender;
