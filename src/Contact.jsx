import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //تمنع الريفريش

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
       setError(true);
      setSubmitted(false);
      return;
    }
    console.log(formData);
    setError(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  return (
    <section className="contact">
      <h2>Contact Us </h2>
      {error && <p>Please fill all fields ⚠️</p>}
      {submitted && <p>Message Sent Successfully ☕</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button>Send Message</button>
      </form>
    </section>
  );
}
