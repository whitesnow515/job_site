import Link from "next/link";
import {
  candidateItems,
  employerItems,
  findJobItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const HeaderNavContent = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}

          {/* End homepage menu items */}
          <li>
            <span>{t('')}</span>
            <ul>
              {findJobItems.map((item, index) => (
                <li key={index}>
                  <span
                    className={
                      isActiveParentChaild(item.items, router.asPath)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          {/* End findjobs menu items */}

          <li>
            <Link href={"../jobyz+"}>{t('Jobs')}</Link>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, router.asPath)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          {/* End Employers menu items */}

          <li>
            <Link href={"../firmen"}>{t('Firmen')}</Link>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, router.asPath)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${isActiveParentChaild(pageItems, router.asPath) ||
                isActiveParentChaild(shopItems[0].items, router.asPath)
                ? "current "
                : ""
              } dropdown`}
          >
            <span>{t('Advice and Help')}</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${isActiveParent(candidateItems, router.asPath) ||
                router.asPath === "/advice&help"
                ? "current"
                : ""
                  ? "current"
                  : ""
              }`}
          >
            <Link href={"/for-employers"}>{t('For employers')}</Link>
          </li>
          {/* End Candidates menu items */}

          {/* End Blog menu items */}
          <li
            className={`${isActiveParent(candidateItems, router.asPath) ||
                router.asPath === "/candidates-dashboard/dashboard"
                ? "current"
                : ""
                  ? "current"
                  : ""
              }`}
          >
            <Link href={"../jobyz+"}>{t('Jobyz+')}</Link>
          </li>

          <li
            className={`${isActiveParent(candidateItems, router.asPath) ||
                router.asPath === "/candidates-dashboard/dashboard"
                ? "current"
                : ""
                  ? "current"
                  : ""
              }`}
          >
            <Link href={"../jobyz+"}>{t('Talent')}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
