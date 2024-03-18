import { useDispatch, useSelector } from "react-redux";
import { addDatePosted } from "../../../features/filter/filterSlice";
import { datePostCheck } from "../../../features/job/jobSlice";

const DatePosted = () => {
    const { datePost } = useSelector((state) => state.job) || {};
    const dispatch = useDispatch();

    //  date-post handler
    const datePostHandler = (e, id) => {
        dispatch(addDatePosted(e.target.value));
        dispatch(datePostCheck(id));
    };

    return (
        <ul className="ui-checkbox">
            {datePost?.map((item) => (
                <li key={item.id}>
                    <label>
                        <input
                            type="radio"
                            value={item.value}
                            onChange={(e) => datePostHandler(e, item.id)}
                            checked={item.isChecked}
                        />
                        <span></span>
                        <p>{item.name}</p>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default DatePosted;
