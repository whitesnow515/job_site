import Link from "next/link";
import blogContent from "../../data/blogs";
import Image from "next/image";

const Blog8 = () => {
  return (
    <>
      {blogContent.slice(0, 6).map((item) => (
        <div className="news-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Image
                  width={389}
                  height={258}
                  src={item.img}
                  alt="blog post"
                />
              </figure>
            </div>
            {/* End image-box */}

            <div className="lower-content">
              <ul className="post-meta">
                <li>
                  <a href="#">August 31, 2021</a>
                </li>
                <li>
                  <a href="#">12 Comment</a>
                </li>
              </ul>
              <h3>
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h3>
              <p className="text">{item.blogText}</p>
              <Link href={`/blog-details/${item.id}`} className="read-more">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog8;
