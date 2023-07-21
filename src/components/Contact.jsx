import {React, useState} from "react";
import "../css/Contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
      };

    return(
        <>
             <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="btn-center">
      <button type="submit">Submit</button>
      </div>
    </form>
        </>
    )
};

export default Contact;
