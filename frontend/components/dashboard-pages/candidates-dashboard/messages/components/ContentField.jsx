import ChatHamburger from "../../../employers-dashboard/messages/components/ChatHamburger";

const ChatBoxContentField = () => {
  return (
    <div className="card message-card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="/images/resource/candidate-8.png"
              alt=""
              className="rounded-circle user_img"
            />
          </div>
          <div className="user_info">
            <span>Arlene McCoy</span>
            <p>Active</p>
          </div>
        </div>

        <div className="btn-box">
          <button className="dlt-chat">Delete Conversation</button>
          <ChatHamburger />
        </div>
      </div>
      {/* End .cart-header */}

      <div className="card-body msg_card_body">
        <div className="d-flex justify-content-start mb-2">
          <div className="img_cont_msg">
            <img
              src="/images/resource/candidate-3.png"
              alt=""
              className="rounded-circle user_img_msg"
            />
            <div className="name">
              Albert Flores <span className="msg_time">35 mins</span>
            </div>
          </div>
          <div className="msg_cotainer">
            How likely are you to recommend our company to your friends and
            family?
          </div>
        </div>

        <div className="d-flex justify-content-end mb-2 reply">
          <div className="img_cont_msg">
            <img
              src="/images/resource/candidate-6.png"
              alt=""
              className="rounded-circle user_img_msg"
            />
            <div className="name">
              You <span className="msg_time">35 mins</span>
            </div>
          </div>
          <div className="msg_cotainer">
            Hey there, we’re just writing to let you know that you’ve been
            subscribed to a repository on GitHub.
          </div>
        </div>

        <div className="d-flex justify-content-start">
          <div className="img_cont_msg">
            <img
              src="/images/resource/candidate-3.png"
              alt=""
              className="rounded-circle user_img_msg"
            />
            <div className="name">
              Cameron Williamson <span className="msg_time">35 mins</span>
            </div>
          </div>
          <div className="msg_cotainer">Ok, Understood!</div>
        </div>
      </div>
      {/* End .card-body */}

      <div className="card-footer">
        <div className="form-group mb-0">
          <form>
            <textarea
              className="form-control type_msg"
              placeholder="Type a message..."
              required
            ></textarea>
            <button
              type="submit"
              className="theme-btn btn-style-one submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* End .card-footer */}
    </div>
  );
};

export default ChatBoxContentField;
