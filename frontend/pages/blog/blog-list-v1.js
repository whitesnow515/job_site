import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import BlogListV1 from "../../components/blog-meu-pages/blog-list-v1";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog List V1" />
      <BlogListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
