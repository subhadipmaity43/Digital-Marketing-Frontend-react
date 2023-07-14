import React, { useState } from "react";

function ContactSection() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };
  const sendMessage = () => {
    if (data.name === "") {
      alert("Please enter your name");
    } else if (data.email === "") {
      alert("Please enter your email");
    } else if (data.message === "") {
      alert("Please fill your message ");
    } else {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        name: data.name,
        email: data.email,
        msg: data.message,
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("http://localhost:3000/user/contact", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 1) {
            alert("Contact Information Sent Successfully");
          } else {
            alert("result.msg");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  // console.log(data);
  return (
    <>
      <div className="contact" id="contact">
        <h2 className="contact-heading">contact</h2>
        <p>---------</p>
        <p className="contact-paragraph">
          Lose away off why half led have near bed. At engage simple father of
          period others except. My giving do summer time dance
          <br />
          hero of though narrow marked at.hero of though narrow marked at.
        </p>
      </div>
      <div className="contact-form">
        <form action="">
          <div className="form-container">
            <div className="form-name flex">
              <label htmlFor="Name"></label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className="form-email flex">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="form-textarea flex">
              <label htmlFor="message"></label>
              <textarea
                name="Message"
                id="message"
                cols="40"
                rows="8"
                placeholder="Enter your message"
                onChange={(e) => setData({ ...data, message: e.target.value })}
                value={data.message}
              ></textarea>
            </div>
            <div className="submit-btn-div">
              <button
                className="submit-btn"
                type="button"
                name="Submit"
                onClick={sendMessage}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="contact-details">
          <p className="contact-details-heading">
            Spring formal no county ye waited. My whether cheered at regular it
            <br />
            of promise blushes perhaps.
          </p>
          <div className="contact-address">
            <div className="address-details">
              <div className="icon">
                <i className="fas fa-location-arrow"></i>
              </div>
              <div className="contact-main-content">
                <h5 className="address">Address:</h5>
                <p className="address-description">149, New York, NY 098</p>
              </div>
            </div>
            <div className="address-details">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-main-content">
                <h5 className="address">Phone number:</h5>
                <p className="address-description">+91 8250946026</p>
              </div>
            </div>
            <div className="address-details">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-main-content">
                <h5 className="address">Email:</h5>
                <p className="address-description">supprot@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
