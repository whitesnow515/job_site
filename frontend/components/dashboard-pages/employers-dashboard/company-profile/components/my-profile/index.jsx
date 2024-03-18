import FormInfoBox from "./FormInfoBox";
import LogoCoverUploader from "./LogoCoverUploader";

const index = () => {
    return (
        <div className="widget-content">
            <LogoCoverUploader />
            {/* End logo and cover photo components */}

            <FormInfoBox />
            {/* compnay info box */}
        </div>
    );
};

export default index;
