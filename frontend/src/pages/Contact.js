import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form
                    action="https://formsubmit.co/kavinyamahesh.28@gmail.com"
                    method="POST"
                    className="form-container"
                >
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Your Message:</label>
                    <textarea
    id="message"
    name="message"
    required
    style={{
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #FFD700",
        backgroundColor: "#333", // Match with the theme
        color: "#FFD700",
        height: "100px",
        resize: "none", // Prevent resizing if not needed
    }}
></textarea>

                    {/* Google reCAPTCHA */}
                    <div className="form-group">
                        <div className="g-recaptcha" data-sitekey="6LdgdiQqAAAAALqxtAMVZGJT9WxFhRcsGBLMxd_N"></div>
                    </div>
                    <button type="submit" className="button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
