import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index14 from "../components/partner/Index14";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index14 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
