import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index28 from "../components/talent/Index28";

const index = () => {
  return (
    <>
      <Seo pageTitle="Talent" />
      <Index28 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
