import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import RegisterForm from "../components/pages-menu/register";

const index = () => {
  return (
    <>
      <Seo pageTitle="Register" />
      <RegisterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
