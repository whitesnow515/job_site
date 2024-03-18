import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index16 from "../components/about/Index16";


const index = () => {
  return (
    <>
      <Seo pageTitle="About" />
      <Index16 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
