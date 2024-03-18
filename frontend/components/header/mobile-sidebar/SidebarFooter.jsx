const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/jobyz_switzerland/?hl=de/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      <a href="#" className="theme-btn btn-style-one mm-listitem__text">
        Job Post
      </a>
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Call us</span>
            <a href="tel:+41762323408">+41 76 232 34 08</a>
          </span>
          <span className="address">
            Jurastrasse 17 <br />
            4900, Langental, Switzerland.
          </span>
          <a href="mailto:support@Jobyz.ch" className="email">
            support@Jobyz.ch
          </a>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
