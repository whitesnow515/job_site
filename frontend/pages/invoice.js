import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Invoice from "../components/pages-menu/invoice";

const index = () => {
  return (
    <>
      <Seo pageTitle="Invoice" />
      <Invoice />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
