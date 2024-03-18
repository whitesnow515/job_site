const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Jobyz by{" "}
        <a
          href="https://smatik.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smatik
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
