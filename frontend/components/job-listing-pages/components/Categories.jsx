import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/filterSlice";

const Categories = () => {
    const { jobList } = useSelector((state) => state.filter) || {};
    const [getCategory, setCategory] = useState(jobList.category);

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };

    useEffect(() => {
        setCategory(jobList.category);
    }, [setCategory, jobList]);

    return (
        <>
            <select
                className="form-select"
                value={jobList.category}
                onChange={categoryHandler}
            >
                <option value="">Choose a category</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="apartments">Apartments</option>
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
