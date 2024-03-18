import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index22 from "../components/karriere/Index22";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index22 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
