import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_Number: "",
    message: "",
  });

  // Only updates the state
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Validate when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (form.name.trim().length < 5) {
      alert("Please enter your full name (at least 5 characters).");
      return;
    }

    // Email validation
    if (!form.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number validation
    if (form.phone_Number.trim().length < 11) {
      alert("Please enter a valid phone number.");
      return;
    }

    // Message validation
    if (form.message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    alert("Form submitted successfully!");

    console.log(form);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone_Number">Phone Number</label>
          <input
            id="phone_Number"
            type="text"
            name="phone_Number"
            value={form.phone_Number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;