import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GallerySection from "../Components/GallerySection";
import AboutSection from "../Components/AboutSection";
import ServiceSection from "../Components/ServiceSection";
import ContactSection from "../Components/ContactSection";
import HeroSection from "../Components/HeroSection";

function Home() {
  return (
    <>
      <div className="main-content">
        {/* <!-- Navbar Start --> */}
        <Header />
        {/* <!-- Navber End --> */}
        {/* <!-- Hero start --> */}
        <HeroSection />
        {/* <!-- Hero End --> */}
        {/* <!-- Gallery start--> */}
        <GallerySection />
        {/* <!-- Gallery End --> */}
        {/* <!-- Service Start--> */}
        <ServiceSection />
        {/* <!-- Service End --> */}
        {/* <!-- about start --> */}
        <AboutSection />
        {/* <!-- about end --> */}
        {/* <!-- Start Video --> */}
        <div className="video-section">
          <div className="autoplay-video">
            <video loop muted autoPlay="autoplay" className="video-main">
              <source
                className=""
                src="/images/video/video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-desc">
              <h2 className="content">Watch Our Video</h2>

              <h6 className="description">Video Background</h6>
            </div>
          </div>
        </div>
        {/* <!-- End Video --> */}
        {/* <!-- partners start --> */}
        <div className="partners">
          <div className="clients-introduction">
            <h2 className="clients-head">
              OUR PARTNERS
              <p className="client-heading-paragraph">---------</p>
            </h2>
          </div>
          <div className="clients">
            <img
              src="/images/clients/2.png"
              className="clients-company-image"
              alt=""
            />
            <img
              src="/images/clients/7.png"
              className="clients-company-image"
              alt=""
            />
            <img
              src="/images/clients/4.png"
              className="clients-company-image"
              alt=""
            />
            <img
              src="/images/clients/3.png"
              className="clients-company-image"
              alt=""
            />
            <img
              src="/images/clients/5.png"
              className="clients-company-image"
              alt=""
            />
            <img
              src="/images/clients/6.png"
              className="clients-company-image"
              alt=""
            />
          </div>
        </div>
        {/* <!-- partners end --> */}
        {/* <!-- contact start --> */}
        <ContactSection />
        {/* <!-- contact end --> */}
        {/* <!-- footer start --> */}
        <Footer />
        {/* <!-- footer end --> */}
      </div>
    </>
  );
}

export default Home;
