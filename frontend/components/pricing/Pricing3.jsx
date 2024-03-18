import Link from "next/link";

const Pricing3 = () => {
  const pricingCotent = [
    {
      id: 1,
      img: "/images/index-13/pricing/1.svg",
      type: "Start Up",
      price: "Free",
      duration: "per month",
      features: [
        "1 job posting",
        "0 featured job",
        "Job displayed for 20 days",
        "Premium Support 24/7",
      ],
    },
    {
      id: 2,
      img: "/images/index-13/pricing/2.svg",
      type: "Company",
      price: "$599.95",
      duration: "per month",
      features: [
        "1 job posting",
        "0 featured job",
        "Job displayed for 20 days",
        "Premium Support 24/7",
      ],
    },
    {
      id: 3,
      img: "/images/index-13/pricing/3.svg",
      type: "Enterprise",
      price: "$999.95",
      duration: "per month",
      features: [
        "1 job posting",
        "0 featured job",
        "Job displayed for 20 days",
        "Premium Support 24/7",
      ],
    },
  ];

  return (
    <>
      {pricingCotent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="pricingCard -type-2">
            <h4 className="pricingCard__title">{item.type}</h4>
            <div className="pricingCard__price">{item.price}</div>
            <div className="pricingCard__subtitle">{item.duration}</div>

            <div className="pricingCard__img">
              <img src={item.img} alt="images" />
            </div>

            <div className="pricingCard__text text-left">
              Standard listing submission, active for 30 days
            </div>

            <ul className="pricingCard__list">
              {item.features.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>

            <div className="pricingCard__btn">
              <Link href="/shop/cart" className="theme-btn btn-style-modern">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing3;
