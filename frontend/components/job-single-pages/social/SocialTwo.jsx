const SocialTwo = () => {
  const socialContent = [
    {
      id: 1,
      name: "Facebook",
      icon: "fa-facebook-f",
      iconClass: "facebook",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fa-twitter",
      iconClass: "twitter",
      link: "https://www.twitter.com/",
    },
    {
      id: 3,
      name: "Linkedin",
      icon: "fa-likedin",
      iconClass: "linkedin",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          className={item.iconClass}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i> {item.name}
        </a>
      ))}
    </>
  );
};

export default SocialTwo;
