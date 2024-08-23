import React, { useState, useContext } from "react";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeMode";

const ContactPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const isFormValid = Object.values(form).every((value) => value.trim() !== "");

  return (
    <div className={`contact-page ${theme === "dark" ? "dark-mode" : ""}`}>
      {" "}
      <div className="map-container">
        <iframe
          title="Amazon HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5021033746766!2d-122.3382075841612!3d47.61530387918568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015484130c33d%3A0x2a4b9b39e3662b2!2sAmazon%20HQ%2C%20410%20Terry%20Ave%20N%2C%20Seattle%2C%20WA%2098109%2C%20USA!5e0!3m2!1sen!2sin!4v1627902012474!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <Button type="submit" disabled={!isFormValid}>
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
