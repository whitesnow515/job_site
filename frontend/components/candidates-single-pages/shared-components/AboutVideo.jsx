import { useState } from "react";
import ModalVideo from "react-modal-video";

const AboutVideo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {" "}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="DY2gJhJaQfI"
        onClose={() => setOpen(false)}
      />
      {/* End popup modal video */}
      <div className="video-box">
        <figure className="image">
          <div className="play-now" role="button" onClick={() => setOpen(true)}>
            <img src="/images/resource/video-img.jpg" alt="video banner" />
            <i className="icon flaticon-play-button-3" aria-hidden="true"></i>
          </div>
        </figure>
      </div>
    </>
  );
};

export default AboutVideo;
