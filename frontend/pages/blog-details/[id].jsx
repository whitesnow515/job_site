import dynamic from "next/dynamic";
import LoginPopup from "../../components/common/form/login/LoginPopup";
import FooterDefault from "../../components/footer/common-footer";
import DefaulHeader from "../../components/header/DefaulHeader";
import MobileMenu from "../../components/header/MobileMenu";
import DetailsContent from "../../components/blog-meu-pages/blog-details/details-content";
import blogs from "../../data/blogs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../../components/common/Seo";

const BlogDetailsDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setBlogItem(blogs.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Blog Details Dyanmic V1" />

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Blog Single --> */}
      <section className="blog-single">
        <div className="auto-container">
          <div className="upper-box">
            <h3>{blog?.blogSingleTitle}</h3>

            <ul className="post-info">
              <li>
                <span className="thumb">
                  <img src={"/images/resource/thumb-1.png"} alt="resource" />
                </span>
                Alison Dawn
              </li>
              <li>August 31, 2021</li>
              <li>12 Comment</li>
            </ul>
            {/* End post info */}
          </div>
        </div>
        {/* End auto-container */}

        <figure className="main-image">
          <img src={blog?.img} alt="resource" />
        </figure>

        <DetailsContent />
      </section>
      {/* <!-- End Blog Single --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
