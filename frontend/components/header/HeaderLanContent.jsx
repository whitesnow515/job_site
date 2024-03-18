import React, {useState} from 'react'
import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
  langItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const HeaderLanContent = () => {
  const [lang, setLang] = useState('de')
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleChangeLang = (lang) => {
    setLang(lang)

    i18n.changeLanguage(lang);
  }

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParent(langItems, router.asPath) ? "current" : ""
            } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <span><img className="languageSelection" src={`images/lang/${lang}.png`} alt="lang-img" width="45" height="45" /></span>
            <div className="mega-menu"
              style={{ width: "200px", height: '50px' }}
            >
              <div className="mega-menu-bar row"
              >
                {langItems.map((item) => (
                  <div
                    key={item.value}
                    className="col"
                    onClick={() => handleChangeLang(item.value)}
                  >
                  <a
                    href="#"
                  >
                    <img className="languageSelection" src={`images/lang/${item.value}.png`} alt="lang-img" width="50" height="50" />
                  </a>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderLanContent;
