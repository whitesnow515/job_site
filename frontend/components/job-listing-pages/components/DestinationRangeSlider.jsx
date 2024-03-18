import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../../../features/filter/filterSlice";

const DestinationRangeSlider = () => {
    const { jobList } = useSelector((state) => state.filter);

    const [destination, setDestination] = useState({
        min: jobList.destination.min,
        max: jobList.destination.max,
    });

    const dispatch = useDispatch();

    // destination handler
    const handleOnChange = ({ min, max }) => {
        dispatch(addDestination({ min, max }));
    };

    useEffect(() => {
        setDestination({
            min: jobList.destination.min,
            max: jobList.destination.max,
        });
    }, [setDestination, jobList]);

    return (
        <div className="range-slider-one">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={100}
                value={{ min: destination.min, max: destination.max }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{destination.max}</span>
                    km
                </div>
            </div>
        </div>
    );
};

export default DestinationRangeSlider;
