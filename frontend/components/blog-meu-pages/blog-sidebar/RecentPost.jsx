import Link from "next/link";
import blogContent from "../../../data/blogs";

const RecentPost = () => {
  return (
    <>
      {blogContent.slice(0, 3).map((item) => (
        <article className="post" key={item.id}>
          <div className="post-thumb">
            <Link href={`/blog-details/${item.id}`}>
              <img src={item.img} alt="blog post" />
            </Link>
          </div>
          <h6>
            <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
          </h6>
          <div className="post-info">August 9, 2021</div>
        </article>
      ))}
    </>
  );
};

export default RecentPost;
