import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ResumeAlerts from "../../../components/dashboard-pages/employers-dashboard/resume-alerts";

const index = () => {
  return (
    <>
      <Seo pageTitle="Resume Alerts" />
      <ResumeAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
