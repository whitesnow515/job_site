import CommentBox from "./CommentBox";
import DescriptionConent from "./DescriptionConent";
import Form from "./Form";

const ProductInfoTabs = () => {
  return (
    <div className="product-info-tabs">
      {/* <!--Product Tabs--> */}
      <div className="prod-tabs tabs-box">
        {/* <!--Tab Btns--> */}
        <ul className="tab-btns tab-buttons clearfix " role="tablist">
          <li>
            <a
              className="tab-btn active"
              data-bs-toggle="tab"
              href="#description"
            >
              Description
            </a>
          </li>
          <li>
            <a className="tab-btn" data-bs-toggle="tab" href="#review">
              Review (2)
            </a>
          </li>
        </ul>
        {/* End tab-btns */}

        {/* <!--Tabs Container--> */}
        <div className="tab-content">
          {/* <!--Tab--> */}
          <div className="tab-pane active" id="description">
            <DescriptionConent />
          </div>

          {/* <!--Tab--> */}
          <div className="tab-pane fade" id="review">
            <div className="content">
              {/* <!-- Comments area --> */}
              <div className="comments-area">
                <CommentBox />
                {/* <!-- Comment Box --> */}
              </div>

              {/* <!-- Comment Form --> */}
              <div className="comment-form default-form">
                <h4>Leave your thought here</h4>
                <Form />
              </div>
              {/* <!--End Comment Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoTabs;
