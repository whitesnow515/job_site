import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import JobListV13 from "../components/job-listing-pages/job-list-v13";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V13" />
      <JobListV13 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
