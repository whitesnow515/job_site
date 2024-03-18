import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index10 from "../components/team/Index10";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index10 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
