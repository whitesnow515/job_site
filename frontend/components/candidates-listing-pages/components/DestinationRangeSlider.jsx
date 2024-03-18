import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { addDestination } from "../../../features/filter/candidateFilterSlice";

const DestinationRangeSlider = () => {
    const { destination } = useSelector((state) => state.candidateFilter);
    const [getDestination, setDestination] = useState({
        min: destination.min,
        max: destination.max,
    });

    const dispatch = useDispatch();

    // destination handler
    const handleOnChange = (value) => {
        dispatch(addDestination(value));
    };

    // destination dispatch
    useEffect(() => {
        setDestination(destination);
    });

    return (
        <div className="range-slider-one">
            <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={100}
                value={getDestination}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{getDestination.max}</span>
                    km
                </div>
            </div>
        </div>
    );
};

export default DestinationRangeSlider;
