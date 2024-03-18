import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import ContentField from "./ContentField";
import { useDispatch } from "react-redux";
import { chatSidebarToggle } from "../../../../../features/toggle/toggleSlice";

const ChatBox = () => {
  const dispatch = useDispatch();

  const chatToggle = () => {
    dispatch(chatSidebarToggle());
  };

  return (
    <div className="row">
      <div
        className="contacts_column col-xl-4 col-lg-5 col-md-12 col-sm-12 chat"
        id="chat_contacts"
      >
        <div className="card contacts_card">
          <div className="card-header">
            {/* Startclose chatbox in mobile menu */}
            <div
              className="fix-icon position-absolute top-0 end-0 show-1023"
              onClick={chatToggle}
            >
              <span className="flaticon-close"></span>
            </div>
            {/* close chatbox in mobile menu */}
            <div className="search-box-one">
              <SearchBox />
            </div>
          </div>
          {/* End cart-heaer */}

          <div className="card-body contacts_body">
            <ContactList />
          </div>
        </div>
      </div>
      {/* End chat_contact */}

      <div className=" col-xl-8 col-lg-7 col-md-12 col-sm-12 chat">
        <ContentField />
      </div>
      {/* chatbox-field-content */}
    </div>
  );
};

export default ChatBox;
