import dynamic from "next/dynamic";
import Seo from "../../..//components/common/Seo";
import Checkout from "../../../components/shop/checkout";

const index = () => {
  return (
    <>
      <Seo pageTitle="Checkout" />
      <Checkout />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
