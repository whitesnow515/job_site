import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index29 from "../components/firmen/Index29";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index29 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
