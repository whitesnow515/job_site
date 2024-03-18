import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import AppliedJobs from "../../../components/dashboard-pages/candidates-dashboard/applied-jobs";

const index = () => {
  return (
    <>
      <Seo pageTitle="Applied Jobs" />
      <AppliedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
