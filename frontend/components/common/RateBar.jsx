import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
const RateBar = ({ rate, color, size }) => 
{   
    let stars = [1,1,1,1,1];
    return (
        <>
            <div className="star">
                {stars.map((star, index) => (
                    index < rate ? 
                        <IoMdStar style={{color:color, width:`${size}px`, height:`${size}px`}} />
                        :<IoMdStarOutline style={{color:color, width:`${size}px`, height:`${size}px`}} />
                ))}
                
            </div>
        </>
    )
};

export default RateBar;
