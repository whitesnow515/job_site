import Social from "../social/Social";

const CompanyInfo = () => {
  return (
    <ul className="company-info">
      <li>
        Primary industry: <span>Software</span>
      </li>
      <li>
        Company size: <span>501-1,000</span>
      </li>
      <li>
        Founded in: <span>2011</span>
      </li>
      <li>
        Phone: <span>123 456 7890</span>
      </li>
      <li>
        Email: <span>info@joio.com</span>
      </li>
      <li>
        Location: <span>London, UK</span>
      </li>
      <li>
        Social media:
        <Social />
      </li>
    </ul>
  );
};

export default CompanyInfo;
