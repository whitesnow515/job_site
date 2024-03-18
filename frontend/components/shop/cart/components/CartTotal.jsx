import Router from "next/router";
import { useSelector } from "react-redux";

const CartTotal = () => {
    const { cart } = useSelector((state) => state.shop) || {};

    let total = 0;
    cart?.forEach((item) => {
        const price = item.qty * item.price;
        total = total + price;
    });

    // tax
    const tax = (total * 5) / 100;

    return (
        <div className="totals-table-outer">
            <ul className="totals-table">
                <li>
                    <h3>Cart Totals</h3>
                </li>

                <li>
                    <span className="col">Subtotal</span>
                    <span className="col price">${total.toFixed(2)}</span>
                </li>
                <li>
                    <span className="col">tax (5%)</span>
                    <span className="col price">${tax.toFixed(2)}</span>
                </li>

                <li>
                    <span className="col">Total</span>
                    <span className="col price">
                        ${(total + tax).toFixed(2)}
                    </span>
                </li>
            </ul>

            <button
                type="submit"
                className="theme-btn btn-style-one proceed-btn"
                onClick={() => Router.push("/shop/checkout")}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartTotal;
