import topCompany from "../../data/topCompany";
import Slider from "react-slick";
import RateBar from "../common/RateBar";
import Link from "next/link";

const TopCompany4 = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} arrows={false}>
            {topCompany
                .slice(0, 12)
                .map((company) => (
                    <div className="company-block1" key={company.id}>
                        <div className="inner-box">
                            <span className="company-bg">
                                <img src="/images/resource/company-bg/default.jpg" alt="featured job"/>
                            </span>
                            <span className="company-logo">
                                <img src={company.img} alt="featured job"/>
                            </span>
                            <h4 className="name" style={{color:"#1967d2"}}>
                                <Link href={`/employers-single-v1/${company.id}`}>
                                    {company.name}
                                </Link>
                            </h4>
                            <RateBar rate={2} color={"#0146a6"} size={25} />
                            <div className="number">
                                63 Jobs <span style={{color:"black"}}>-- Bacel</span>
                            </div>
                            <Link
                                href={`/employers-single-v1/${company.id}`}
                                className="btn">
                                {company.jobNumber}
                                Folgen
                            </Link>
                        </div>
                    </div>
                ))}
        </Slider>
    );
};

export default TopCompany4;
