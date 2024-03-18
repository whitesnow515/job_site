import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/candidateFilterSlice";

const Categories = () => {
    const { category } = useSelector((state) => state.candidate) || {};
    const { category: getCategory } =
        useSelector((state) => state.candidateFilter) || {};

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };

    return (
        <>
            <select
                onChange={categoryHandler}
                value={getCategory}
                className="form-select"
            >
                <option value="">Choose a category</option>
                {category?.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
