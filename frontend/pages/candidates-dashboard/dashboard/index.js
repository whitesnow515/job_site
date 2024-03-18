import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/candidates-dashboard/dashboard";

const index = () => {
    return (
        <>
            <Seo pageTitle="Candidates Dashboard" />
            <DashboadHome />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
