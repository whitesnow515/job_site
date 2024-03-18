import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from "react-icons/fi";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero13 from "../hero/hero-13/index8";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import Blog3 from "../blog/Blog3";


const Index15 = () => {
  const { t } = useTranslation();

  const ServiceList = [
    {
      icon: <FiCast />,
      title: 'Muster Anschreiben',
      description: 'Laden Sie sich hier bequem unser Muster für Ihr Anschreiben kostenlos runter. '
    },
    {
      icon: <FiLayers />,
      title: 'Anschreiben Lehrstelle',
      description: 'Lade Dir hier bequem unser Muster für ein Anschreiben für eine Lehrstelle herunter.'
    },
    {
      icon: <FiUsers />,
      title: 'Vorlage Lebenslauf',
      description: 'Laden Sie sich hier bequem ein Beispiel für einen Lebenslauf herunter. Wir haben für Sie verschiedene Lebensläufe erstellt.'
    },
    {
      icon: <FiUsers />,
      title: 'Checkliste Vorstellungsgepräch',
      description: 'Laden Sie sich hier bequem unsere Checkliste für das Vorstellungsgespräch herunter.'
    },
    {
      icon: <FiUsers />,
      title: 'Vorlage Kündigung',
      description: 'Laden Sie sich hier unsere Vorlage kostenlos für Ihr Kündigungsschreiben bequem runter.'
    },
  ]

  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero13 />
      {/* End Hero Section */}

      {/* Start Service Area */}
      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" >
              <div className="section-title text-center mb--30">
                <h2>Hilfestellung</h2>
                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {ServiceList.map((val, i) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i} style={{ width: "19.33%",}}>
                <a className="text-center" href="/service-details">
                  <div className="service service__style--2">
                    <div className="icon" >
                      {val.icon}
                    </div>
                    <div className="content" >
                      <h3 className="title" style={{ fontSize: "1.3rem",}}>{val.title }</h3 > 
                      <p>{val.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="news-section style-three">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          {/* End .sec-title */}

          <div className="row" data-aos="fade-up">
            <Blog3 />
          </div>
        </div>
      </section>

      {/* <!-- End Ads Section --> */}
      {/* <!-- End News Section --> */}
      {/* End Service Area */}

      {/* <!-- End About Section --> */}

      <FooterDefault footerStyle="-type-13 alternate3" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default Index15;