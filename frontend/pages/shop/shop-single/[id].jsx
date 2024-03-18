import dynamic from "next/dynamic";
import shopItems from "../../../data/shopItems";
import Breadcrumb from "../../../components/shop/Breadcrumb";
import LoginPopup from "../../../components/common/form/login/LoginPopup";
import Seo from "../../../components/common/Seo";
import MobileMenu from "../../../components/header/MobileMenu";
import FooterDefault from "../../../components/footer/common-footer";
import ProductInfoTabs from "../../../components/shop/shop-single/components/ProductInfoTabs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useDispatch } from "react-redux";
import { addCart, addQty } from "../../../features/shop/shopSlice";
import ShopHeader from "../../../components/header/ShopHeader";

const ShopSingleDyanmic = () => {
  const router = useRouter();
  const [product, setProducts] = useState({});
  const [getQty, setQty] = useState(1);
  const id = router.query.id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProducts(shopItems.find((item) => item.id == id));

    return () => {};
  }, [id]);

  // add to cart
  const addToCart = () => {
    dispatch(addCart({ product, qty: getQty }));
  };

  // qty handler
  const qtyHandler = (qty) => {
    setQty(qty);
  };

  return (
    <>
      <span className="header-span"></span>

      <Seo pageTitle="Shop Single Dynamic" />
      {/* <!-- Header Span --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <ShopHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Shop Single" meta={product?.title} />
      {/* <!--End Page Title--> */}

      {/* <!-- Start Shop Single --> */}
      <section className="shop-single">
        <div className="auto-container">
          {/* <!-- Start Product Detail --> */}
          <div className="product-details">
            {/*  <!--Start Basic Details--> */}
            <div className="basic-details">
              <div className="row clearfix">
                <div className="image-column col-md-6 col-sm-12">
                  <Gallery>
                    <figure className="image">
                      <Item
                        original={product?.img}
                        thumbnail={product?.img}
                        width={410}
                        height={410}
                      >
                        {({ ref, open }) => (
                          <div
                            className="lightbox-image"
                            ref={ref}
                            onClick={open}
                          >
                            <img
                              src={product?.img}
                              alt="shop single product for job board"
                            />
                            <span className="icon flaticon-magnifying-glass"></span>
                          </div>
                        )}
                      </Item>
                    </figure>
                  </Gallery>
                </div>
                {/* End img-column */}

                <div className="info-column col-md-6 col-sm-12">
                  <div className="inner-column">
                    <h4 className="product-name">
                      {product?.title} - KeySmart - Premium Key Holders
                    </h4>
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tempus nulla faucibus viverra nisl non senectus tortor.
                      Suspendisse pellentesque elementum proin diam.
                    </div>
                    <div className="item-price">
                      ${product?.price}
                      <del>${product?.oldPrice}</del>
                    </div>

                    <div className="other-options">
                      <div className="item-quantity">
                        <input
                          type="number"
                          className="qty"
                          name="qty"
                          defaultValue={1}
                          min={1}
                          onChange={(e) => qtyHandler(e.target.value)}
                        />
                        <span className="in-stock">
                          {product?.inStock} in stock
                        </span>
                      </div>
                      {/* End item-quantity */}

                      <div className="btn-box">
                        <button
                          onClick={addToCart}
                          type="button"
                          className="theme-btn btn-style-one"
                        >
                          <span className="flaticon-shopping-bag"></span> Add to
                          Cart
                        </button>
                        <button
                          type="button"
                          className="theme-btn btn-style-three bookmark-btn"
                        >
                          <span className="flaticon-bookmark"></span>
                        </button>
                      </div>
                      {/* End add-to-cart-box */}
                    </div>
                    {/* End others-options */}

                    <ul className="product-meta">
                      <li>
                        <span>Sku:</span> RTA-0058
                      </li>
                      <li>
                        <span>Category:</span> {product?.category}
                      </li>
                      <li>
                        <span>Tags:</span> Business / Seo
                      </li>
                    </ul>
                    {/* End product-meta */}
                  </div>
                  {/* End inner-column */}
                </div>
                {/* End info-column */}
              </div>
              {/* End .row */}
            </div>
            {/*  <!--End Basic Details--> */}

            {/*  <!--Start Product Info Tabs--> */}
            <ProductInfoTabs />
            {/*  <!--End Product Info Tabs--> */}
          </div>
          {/* <!-- End Product Detail --> */}
        </div>
      </section>
      {/* <!-- End Shop Single --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ShopSingleDyanmic), {
  ssr: false,
});
