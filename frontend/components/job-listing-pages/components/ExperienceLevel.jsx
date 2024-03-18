import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../../features/filter/filterSlice";
import { experienceLavelCheck } from "../../../features/job/jobSlice";

const ExperienceLevel = () => {
    const { experienceLavel } = useSelector((state) => state.job) || {};
    const dispatch = useDispatch();

    // experience handler
    const experienceHandler = (e, id) => {
        dispatch(addExperience(e.target.value));
        dispatch(experienceLavelCheck(id));
    };

    return (
        <ul className="switchbox">
            {experienceLavel?.map((item) => (
                <li key={item.id}>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            value={item.value}
                            onChange={(e) => experienceHandler(e, item.id)}
                        />
                        <span className="slider round"></span>
                        <span className="title">{item.name}</span>
                    </label>
                </li>
            ))}
            <li>
                <button className="view-more">
                    <span className="icon flaticon-plus"></span> View More
                </button>
            </li>
        </ul>
    );
};

export default ExperienceLevel;
