import Link from "next/link";


const Pricing = () => {
  const pricingCotent = [
    {
      id: 1,
      price: "Kostenlos",
      packageType: "Basic",
      tag: "tagged",
      features: [
        "Template Plus",
        "3x Job-Alarm",
        "Online Campaigns",
        
      ],
    },
    {
      id: 2,
      packageType: "Advanced",
      price: "400",
      tag: "tagged",
      features: [
        "Template Plus",
        "5x Job-Alarm",
        "5x Job Boost",
        "Online Campaigns",
        "Partner Network",
      ],
    },
  ];

  return (
    <div className="pricing-tabs tabs-box wow fadeInUp">
      {/* <!--Tabs Container--> */}
      <div className="row">
        {pricingCotent.map((item) => (
          <div
            className={`pricing-table col-lg-4 col-md-6 col-sm-12 ${item.tag}`}
            key={item.id}
          >
            <div className="inner-box">
              {item.tag ? (
                <>
                  <span className="tag">Recommended</span>
                </>
              ) : (
                ""
              )}

              <div className="title">{item.packageType}</div>
              <div  style={{display: "flex", width:"330px", flexDirection: "column", borderRadius:"6", color: "#1967D2",  }}>
              31 Tage online
                </div>
              <div className="price">
                CHF{item.price} <span className="duration">/ monthly</span>
              </div>
              <div className="table-content">
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="table-footer">
                <Link href="/shop/cart" className="theme-btn btn-style-three">
                  Jetzt Inserieren
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
