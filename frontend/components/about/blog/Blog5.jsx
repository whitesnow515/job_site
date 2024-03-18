import Link from "next/link";
import blogContent from "../../data/blogs";

const Blog5 = () => {
  return (
    <>
      {blogContent.slice(4, 8).map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="blog-block -type-2">
            <div className="block-header">
              <div>24</div>
              <div>JUNE</div>
            </div>

            <div className="block-content">
              <h4>
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h4>
            </div>

            <div className="block-footer">
              <div>12 Comment</div>
              <Link href={`/blog-details/${item.id}`} className="button -arrow">
                Read More
                <span className="fa fa-angle-right"></span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog5;
