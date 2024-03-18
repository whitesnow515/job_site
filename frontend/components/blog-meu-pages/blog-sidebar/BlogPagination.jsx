const BlogPagination = () => {
  return (
    <nav className="ls-pagination">
      <ul>
        <li className="prev">
          <a href="#">
            <i className="fa fa-arrow-left"></i>
          </a>
        </li>
        {/* End li */}

        <li>
          <a href="#">1</a>
        </li>
        {/* End li */}

        <li>
          <a href="#" className="current-page">
            2
          </a>
        </li>
        {/* End li */}

        <li>
          <a href="#">3</a>
        </li>
        {/* End li */}

        <li className="next">
          <a href="#">
            <i className="fa fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
