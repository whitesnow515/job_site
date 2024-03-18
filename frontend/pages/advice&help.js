import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Index15 from "../components/advice&help/Index15";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Index15 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
