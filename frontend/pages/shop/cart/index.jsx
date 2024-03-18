import dynamic from "next/dynamic";
import Seo from "../../..//components/common/Seo";
import Cart from "../../../components/shop/cart";

const index = () => {
  return (
    <>
      <Seo pageTitle="Cart" />
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
