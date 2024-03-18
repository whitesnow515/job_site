import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index23 from "../components/jobyz+/Index23";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index23 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
