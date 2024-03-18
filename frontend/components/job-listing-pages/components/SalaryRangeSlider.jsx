import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addSalary } from "../../../features/filter/filterSlice";

const SalaryRangeSlider = () => {
    const { jobList } = useSelector((state) => state.filter);
    const [salary, setSalary] = useState({
        min: jobList.salary.min,
        max: jobList.salary.max,
    });

    const dispatch = useDispatch();

    const handleOnChange = ({ min, max }) => {
        dispatch(addSalary({ min, max }));
    };

    useEffect(() => {
        setSalary({
            min: jobList.salary.min,
            max: jobList.salary.max,
        });
    }, [setSalary, jobList]);

    return (
        <div className="range-slider-one salary-range">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={20000}
                value={{
                    min: salary.min,
                    max: salary.max,
                }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="d-inline-flex align-items-center">
                        <span className="min">${salary.min}</span>
                        <span className="max ms-2">${salary.max}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SalaryRangeSlider;
