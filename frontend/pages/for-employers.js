import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index23 from "../components/for-employers/Index13";

const index = () => {
  return (
    <>
      <Seo pageTitle="For-Employers" />
      <Index23 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });