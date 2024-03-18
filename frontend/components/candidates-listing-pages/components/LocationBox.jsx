import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../../features/filter/candidateFilterSlice";

const LocationBox = () => {
    const { location } = useSelector((state) => state.candidateFilter) || {};
    const [getLocation, setLocation] = useState(location);
    const dispath = useDispatch();

    // location handler
    const locationHandler = (e) => {
        setLocation(e.target.value);
    };

    // location dispatch
    useEffect(() => {
        dispath(addLocation(getLocation));
    }, [dispath, addLocation, getLocation]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="City or postcode"
                value={location}
                onChange={locationHandler}
            />
            <span className="icon flaticon-map-locator"></span>
        </>
    );
};

export default LocationBox;
