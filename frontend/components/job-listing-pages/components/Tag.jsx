import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../../../features/filter/filterSlice";

const Tag = () => {
    const { tags } = useSelector((state) => state.job) || {};
    const { jobList } = useSelector((state) => state.filter) || {};
    const dispatch = useDispatch();

    // tag handler
    const tagHandler = (value) => {
        dispatch(addTag(value));
    };

    return (
        <ul className="tags-style-one">
            {tags?.map((item) => (
                <li
                    className={item.value === jobList.tag ? "active" : ""}
                    onClick={() => tagHandler(item.value)}
                    key={item.id}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Tag;
