import { useState } from "react";

// validation chaching
function checkFileTypes(files) {
    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    for (let i = 0; i < files.length; i++) {
        if (!allowedTypes.includes(files[i].type)) {
            return false;
        }
    }
    return true;
}

const CvUploader = () => {
    const [getManager, setManager] = useState([]);
    const [getError, setError] = useState("");

    const cvManagerHandler = (e) => {
        //const data = Array.from(e.target.files);
        const data = e.target.files[0];

        var username = 'meinname';
        var filename = 'test.docx';

        fetch('http://localhost:8095/files/' + username + '/' + filename, {
            method: "POST",
            body: data,
            headers: {
                "Content-type": "application/x-binary; charset=UTF-8"
            }
        });


        

        /*const isExist = getManager?.some((file1) =>
            data.some((file2) => file1.name === file2.name)
        );
        if (!isExist) {
            if (checkFileTypes(data)) {
                setManager(getManager.concat(data));
                setError("");
            } else {
                setError("Only accept  (.doc, .docx, .pdf) file");
            }
        } else {
            setError("File already exists");
        }*/
    };

    // delete image
    const deleteHandler = (name) => {
        const deleted = getManager?.filter((file) => file.name !== name);
        setManager(deleted);
    };

    return (
        <>
            {/* Start Upload resule */}
            <div className="uploading-resume">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept=".doc,.docx,.xml,application/msword,application/pdf, image/*"
                        id="upload"
                        multiple
                        onChange={cvManagerHandler}
                    />
                    <label className="cv-uploadButton" htmlFor="upload">
                        <span className="title">Drop files here to upload</span>
                        <span className="text">
                            To upload file size is (Max 5Mb) and allowed file
                            types are (.doc, .docx, .pdf)
                        </span>
                        <span className="theme-btn btn-style-one">
                            Upload Resume
                        </span>
                        {getError !== "" ? (
                            <p className="ui-danger mb-0">{getError}</p>
                        ) : undefined}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
            </div>
            {/* End upload-resume */}

            {/* Start resume Preview  */}
            <div className="files-outer">
                {getManager?.map((file, i) => (
                    <div key={i} className="file-edit-box">
                        <span className="title">{file.name}</span>
                        <div className="edit-btns">
                            <button>
                                <span className="la la-pencil"></span>
                            </button>
                            <button onClick={() => deleteHandler(file.name)}>
                                <span className="la la-trash"></span>
                            </button>
                        </div>
                    </div>
                ))}

                {/* <div className="file-edit-box">
                    <span className="title">Sample CV</span>
                    <div className="edit-btns">
                        <button>
                            <span className="la la-pencil"></span>
                        </button>
                        <button>
                            <span className="la la-trash"></span>
                        </button>
                    </div>
                </div>

                <div className="file-edit-box">
                    <span className="title">Sample CV</span>
                    <div className="edit-btns">
                        <button>
                            <span className="la la-pencil"></span>
                        </button>
                        <button>
                            <span className="la la-trash"></span>
                        </button>
                    </div>
                </div>*/}
            </div>
            {/* End resume Preview  */}
        </>
    );
};

export default CvUploader;
