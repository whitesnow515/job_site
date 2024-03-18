import Link from "next/link";
import SearchForm from "./SearchForm";

const FooterContent4 = () => {
  const footerContent = [
    {
      id: 1,
      title: "For Candidates",
      colClass: "col-lg-3",
      menuList: [
        { name: "Browse Jobs", route: "/" },
        { name: "Browse Categories", route: "/" },
        { name: "Candidate Dashboard", route: "/" },
        { name: "Job Alerts", route: "/" },
        { name: "My Bookmarks", route: "/" },
      ],
    },
    {
      id: 2,
      title: "For Employers",
      colClass: "col-lg-3",
      menuList: [
        { name: "Browse Candidates", route: "/" },
        { name: "Employer Dashboard", route: "/" },
        { name: "Add Job", route: "/" },
        { name: "Job Packages", route: "/" },
      ],
    },
    {
      id: 3,
      title: "About Us",
      colClass: "col-lg-2",
      menuList: [
        { name: "Job Page", route: "/" },
        { name: "Job Page Alternative", route: "/" },
        { name: "Resume Page", route: "/" },
        { name: "Blog", route: "/" },
        { name: "Contact", route: "/" },
      ],
    },
  ];
  return (
    <>
      {footerContent.map((item) => (
        <div
          className={`footer-column ${item.colClass} col-md-6 col-sm-12`}
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="footer-column col-lg-4 col-md-12 col-sm-12">
        <div className="footer-widget">
          <h4 className="widget-title">Join Us On</h4>
          <div className="widget-content">
            <div className="newsletter-form">
              <div className="text">We don’t send spam so don’t worry.</div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent4;
