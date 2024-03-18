import Link from "next/link";
import blogContent from "../../data/blogs";
import Image from "next/image";

const Blog4 = () => {
  return (
    <>
      {blogContent.slice(6, 10).map((item) => (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="blog -type-1">
            <div className="blog-image">
              <Image width={298} height={200} src={item.img} alt="blog post" />
            </div>

            <div className="blog-content">
              <div>November 23, 2021</div>
              <h4>
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog4;
