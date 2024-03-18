import Link from "next/link";
import footerContent from "../../data/footerContent";

const FooterContent3 = () => {
  return (
    <>
      {footerContent.slice(0, 3).map((item) => (
        <div
          className="footer-column col-lg-3 col-md-6 col-sm-12"
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
    </>
  );
};

export default FooterContent3;
