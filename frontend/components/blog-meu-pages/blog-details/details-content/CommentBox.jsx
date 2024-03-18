const CommentBox = () => {
  return (
    <>
      {/* <!-- Comment Box --> */}
      <div className="comment-box">
        <h4>Comment</h4>
        {/* <!-- Comment --> */}
        <div className="comment">
          <div className="user-thumb">
            <img src="/images/resource/avatar-1.jpg" alt="resource" />
          </div>
          <div className="comment-info">
            <div className="user-name">Oscar Cafeo</div>
            <div className="title">Beautiful courses</div>
          </div>
          <div className="text">
            Far much that one rank beheld bluebird after outside ignobly
            allegedly more when oh arrogantly vehement tantaneously eel
            valiantly petted this along across highhandedly much.
          </div>
        </div>
      </div>

      <div className="comment-box">
        {/* <!-- Comment --> */}
        <div className="comment">
          <div className="user-thumb">
            <img src="/images/resource/avatar-2.jpg" alt="resource" />
          </div>
          <div className="comment-info">
            <div className="user-name">Alex Morgan</div>
            <div className="title">Beautiful courses</div>
          </div>
          <div className="text">
            Far much that one rank beheld bluebird after outside ignobly
            allegedly more when oh arrogantly vehement tantaneously eel
            valiantly petted this along across highhandedly much.
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentBox;
