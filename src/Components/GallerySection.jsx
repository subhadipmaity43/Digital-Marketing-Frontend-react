import React from "react";

function GallerySection() {
  return (
    <>
      <div className="gallery" id="gallery">
        <h2 className="gallery-heading">Gallery</h2>
        <p>---------</p>
        <h4>Our Awesome Works</h4>
        <p className="gallery-paragraph">
          Calling observe for who pressed raising his. Can connection instrument
          astonished unaffected his motionless preference.
          <br />
          Men lasting out end article express fortune demands own charmed. About
          are are money ask how seven.
        </p>
      </div>

      <div className="images">
        <div className="gallery-images">
          <img
            className="gallery-images-row-1"
            src="/images/gallery/image-1.jpg"
            alt=""
          />
          <img
            className="gallery-images-row-2"
            src="/images/gallery/image-5.jpg"
            alt=""
          />
          <img
            className="gallery-images-row-1"
            src="/images/gallery/image-3.jpg"
            alt=""
          />
          <img
            className="gallery-images-row-2"
            src="/images/gallery/image-4.jpg"
            alt=""
          />
          <img
            className="gallery-images-row-1"
            src="/images/gallery/image-2.jpg"
            alt=""
          />
          <img
            className="gallery-images-row-2"
            src="/images/gallery/image-6.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default GallerySection;
