import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import JobListV1 from "../../components/job-listing-pages/job-list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V1" />
      <JobListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
