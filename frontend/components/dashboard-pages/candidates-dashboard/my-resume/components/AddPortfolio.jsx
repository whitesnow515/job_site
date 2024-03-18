const AddPortfolio = () => {
  return (
    <div className="uploading-outer">
      <div className="uploadButton">
        <input
          className="uploadButton-input"
          type="file"
          name="attachments[]"
          accept="image/*, application/pdf"
          id="upload"
          multiple
        />
        <label className="uploadButton-button ripple-effect" htmlFor="upload">
          Add Portfolio
        </label>
        <span className="uploadButton-file-name"></span>
      </div>
    </div>
  );
};

export default AddPortfolio;
