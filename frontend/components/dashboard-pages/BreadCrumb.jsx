const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Ready to jump back in?</div>
    </div>
  );
};

export default BreadCrumb;
