import { useDispatch, useSelector } from "react-redux";
import { addQualificationCheck } from "../../../features/candidate/candidateSlice";
import { addQualification } from "../../../features/filter/candidateFilterSlice";

const Qualification = () => {
    const { qualification } = useSelector((state) => state.candidate) || {};
    const dispatch = useDispatch();

    // qualification handler
    const qualificationHandler = (e, id) => {
        dispatch(addQualificationCheck(id));
        dispatch(addQualification(e.target.value));
    };

    return (
        <ul className="switchbox">
            {qualification?.map((item) => (
                <li key={item.id}>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={item.isChecked || false}
                            value={item.value}
                            onChange={(e) => qualificationHandler(e, item.id)}
                        />
                        <span className="slider round"></span>
                        <span className="title">{item.name}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default Qualification;
