import Link from "next/link";
import shopItems from "../../../../data/shopItems";
import { useDispatch } from "react-redux";
import { addCart } from "../../../../features/shop/shopSlice";
const ShopItems = () => {
    const dispatch = useDispatch();

    // add to cart
    const addToCart = (id) => {
        const item = shopItems?.find((item) => item.id === id);
        dispatch(addCart({ product: item }));
    };
    return (
        <>
            {shopItems.map((item) => (
                <div
                    className="product-block col-lg-3 col-md-6 col-sm-12"
                    key={item.id}
                >
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image">
                                <Link href={`/shop/shop-single/${item.id}`}>
                                    <img src={item.img} alt="shop items" />
                                </Link>
                            </figure>
                        </div>
                        {/* End image-box */}
                        <div className="info">
                            <h3>{item.title}</h3>
                            <span className="price">${item.price}</span>
                            {/* <Link
                                href="/shop/cart"
                                className="theme-btn btn-style-one"
                            >
                                <i className="flaticon-shopping-bag"></i>Add to
                                Cart
                            </Link> */}
                            <button
                                onClick={() => addToCart(item.id)}
                                className="theme-btn btn-style-one"
                            >
                                <i className="flaticon-shopping-bag"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ShopItems;
