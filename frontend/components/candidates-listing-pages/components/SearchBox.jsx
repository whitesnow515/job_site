import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../features/filter/candidateFilterSlice";

const SearchBox = () => {
    const { keyword } = useSelector((state) => state.candidateFilter);
    const [getKeyword, setKeyword] = useState(keyword);

    const dispatch = useDispatch();

    // keyword handler
    const keywordHandler = (e) => {
        setKeyword(e.target.value);
    };

    // keyword dispatch
    useEffect(() => {
        dispatch(addKeyword(getKeyword));
    }, [dispatch, addKeyword, getKeyword]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Job title, keywords, or company"
                onChange={keywordHandler}
                value={keyword}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
