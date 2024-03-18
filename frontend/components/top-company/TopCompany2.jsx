import topCompany from "../../data/topCompany";
import Slider from "react-slick";
import Link from "next/link";

const TopCompany2 = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} arrows={false}>
      {topCompany.slice(0, 12).map((company) => (
        <Link
          href={`/employers-single-v1/${company.id}`}
          className="company-block"
          key={company.id}
        >
          <div className={`inner-box ${company.bgColor}`}>
            <figure className="image">
              <img src={company.img} alt="top company" />
            </figure>
            <h4 className="name">{company.name}</h4>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default TopCompany2;
