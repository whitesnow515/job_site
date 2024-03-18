import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Faq from "../components/pages-menu/faq";

const index = () => {
  return (
    <>
      <Seo pageTitle="Faq" />
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
