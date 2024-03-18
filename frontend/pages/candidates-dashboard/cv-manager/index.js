import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import CvManager from "../../../components/dashboard-pages/candidates-dashboard/cv-manager";

const index = () => {
  return (
    <>
      <Seo pageTitle="CV Manager" />
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
