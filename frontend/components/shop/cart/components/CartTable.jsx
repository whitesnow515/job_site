import CartItems from "./CartItems";

const CartTable = () => {
    return (
        <table className="default-table ">
            <thead className="cart-header">
                <tr>
                    <th className="product-name">Product</th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Subtotal</th>
                    <th className="product-remove">&nbsp;</th>
                </tr>
            </thead>
            {/* End thead */}

            <tbody>
                <CartItems />
            </tbody>
            {/* End tbody */}
        </table>
    );
};

export default CartTable;
