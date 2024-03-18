import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index19 from "../components/wage/Index19";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pricing" />
      <Index19 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
