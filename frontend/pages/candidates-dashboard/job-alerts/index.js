import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import JobAlerts from "../../../components/dashboard-pages/candidates-dashboard/job-alerts";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Job Alerts" />
      <JobAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
