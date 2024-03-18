import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addFoundationDate } from "../../../features/filter/employerFilterSlice";

const FoundationDate = () => {
    const { foundationDate: getGoundationDate } =
        useSelector((state) => state.employerFilter) || {};
    const [foundationDate, setFoundationDate] = useState({
        min: getGoundationDate.min,
        max: getGoundationDate.max,
    });

    const dispath = useDispatch();

    const handleOnChange = (value) => {
        dispath(addFoundationDate(value));
    };

    useEffect(() => {
        setFoundationDate(getGoundationDate);
    }, [setFoundationDate, getGoundationDate]);

    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={1900}
                maxValue={2028}
                value={foundationDate}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">{foundationDate.min}</span>
                        <span className="max ms-2">{foundationDate.max}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoundationDate;
