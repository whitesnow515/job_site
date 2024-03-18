import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ShortlistedResumes from "../../../components/dashboard-pages/employers-dashboard/shortlisted-resumes";

const index = () => {
  return (
    <>
      <Seo pageTitle="Shortlisted Resumes" />
      <ShortlistedResumes />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
