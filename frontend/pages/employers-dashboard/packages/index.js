import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Packages from "../../../components/dashboard-pages/employers-dashboard/packages";

const index = () => {
  return (
    <>
      <Seo pageTitle="Packages" />
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
