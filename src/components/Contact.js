import React from "react";

const Contact = () => {
  const redirectToLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/rahulforweb/";
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me on LinkedIn!</p>
      <button onClick={redirectToLinkedIn}>Go to LinkedIn</button>
    </section>
  );
};

export default Contact;