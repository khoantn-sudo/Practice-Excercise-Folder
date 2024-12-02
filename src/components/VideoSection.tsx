import React from "react";

const VideoSection: React.FC = () => {
  return (
    <>
      <section className="video-section">
        <div className="content-wrapper">
          <div className="video-thumbnail">
            <img src="" alt="Video Thumbnail" />
            <button className="play-button"></button>
          </div>

          <div className="text-content">
            <h2>LETS TAKE ADVANTAGE</h2>
            <p className="subtitle">SABLE CLOUD BENEATH WAS DISHED</p>
            <p className="description">
              Best for active freelancers and designers who need more projects
              and premium features code and unlock more.
            </p>
          </div>

          <div className="cta-buttons">
            <button className="primary button">LEARN MORE</button>
            <a href="#">Explore services</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
