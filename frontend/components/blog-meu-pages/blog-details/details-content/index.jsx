import CommentBox from "./CommentBox";
import Form from "./Form";
import Pagination from "./Pagination";
import SocialShare from "./SocialShare";
import Tag from "./Tag";

const index = () => {
  return (
    <div className="auto-container">
      <h4>Course Description</h4>

      <p>
        Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
        Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
        Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this
        is a text link libero tempus congue.
      </p>

      <p>
        Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
        sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
        egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Integer tristique elit lobortis purus bibendum, quis dictum metus
        mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
        massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl
        massa, at interdum mauris sollicitudin et.
      </p>

      <blockquote className="blockquote-style-one mb-5 mt-5">
        <p>
          Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
          Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.{" "}
        </p>
        <cite>Luis Pickford</cite>
      </blockquote>
      {/* End BlogQuote */}

      <h4>What you&apos;ll learn</h4>
      <ul className="list-style-four">
        <li>Become a UI/UX designer.</li>
        <li>Build a UI project from beginning to end.</li>
        <li>You will be able to start earning money Figma skills.</li>
        <li>Work with colors & fonts.</li>
        <li>You will create your own UI Kit.</li>
        <li>Become a UI/UX designer.</li>
        <li>Build a UI project from beginning to end.</li>
        <li>You will be able to start earning money Figma skills.</li>
        <li>Work with colors & fonts.</li>
        <li>You will create your own UI Kit.</li>
      </ul>
      {/* List */}

      <figure className="image">
        <img src="/images/resource/post-img.jpg" alt="resource" />
      </figure>

      <h4>Requirements</h4>
      <ul className="list-style-three">
        <li>
          We do not require any previous experience or pre-defined skills to
          take this course. A great orientation would be enough to master UI/UX
          design.
        </li>
        <li>A computer with a good internet connection.</li>
        <li>Adobe Photoshop (OPTIONAL)</li>
      </ul>
      {/* <!-- list --> */}

      <div className="other-options">
        <div className="social-share">
          <h5>Share this post</h5>
          <SocialShare />
        </div>
        {/* End social-share */}

        <Tag />
      </div>
      {/* End other share */}

      <div className="post-control">
        <Pagination />
      </div>
      {/* <!-- Post Control --> */}

      <div className="comments-area">
        <CommentBox />
      </div>

      {/* <!-- Comments area --> */}

      {/* <!-- Comment Form --> */}
      <div className="comment-form default-form">
        <h4>Leave your thought here</h4>
        <Form />
      </div>
      {/* <!--End Comment Form --> */}
    </div>
  );
};

export default index;
