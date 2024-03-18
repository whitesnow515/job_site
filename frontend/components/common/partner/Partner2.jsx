import Slider from "react-slick";

const Partner2 = () => {
  const settings = {
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderGallery = [
    { id: 1, link: "#", imgNumber: "1" },
    { id: 2, link: "#", imgNumber: "2" },
    { id: 3, link: "#", imgNumber: "3" },
    { id: 4, link: "#", imgNumber: "4" },
    { id: 5, link: "#", imgNumber: "5" },
    { id: 6, link: "#", imgNumber: "6" },
    { id: 7, link: "#", imgNumber: "7" },
    { id: 8, link: "#", imgNumber: "5" },
  ];

  return (
    <>
      <Slider {...settings} arrows={false}>
        {sliderGallery.map((item) => (
          <li className="slide-item" key={item.id}>
            <figure className="image-box">
              <a href={item.link}>
                <img
                  src={`/images/index-11/clients/${item.imgNumber}.svg`}
                  alt="brand"
                />
              </a>
            </figure>
          </li>
        ))}
      </Slider>
    </>
  );
};

export default Partner2;
