import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Pricing from "../components/pages-menu/pricing";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pricing" />
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
