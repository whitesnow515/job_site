import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Contact from "../components/pages-menu/contact";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
