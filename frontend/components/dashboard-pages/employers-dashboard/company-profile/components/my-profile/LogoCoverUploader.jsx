import { useState } from "react";

const LogoCoverUploader = () => {
    const [logoImg, setLogoImg] = useState("");
    const [converImg, setCoverImg] = useState("");

    // logo image
    const logoHandler = (file) => {
        setLogoImg(file);
    };

    // cover image
    const coverHandler = (file) => {
        setCoverImg(file);
    };

    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        required
                        onChange={(e) => logoHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logoImg !== "" ? logoImg?.name : " Browse Logo"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>

            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*, application/pdf"
                        id="upload_cover"
                        onChange={(e) => coverHandler(e.target.files[0])}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload_cover"
                    >
                        {converImg !== "" ? converImg?.name : "Browse Cover"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoCoverUploader;
