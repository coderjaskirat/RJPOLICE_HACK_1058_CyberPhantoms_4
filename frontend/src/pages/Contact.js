export default function Contact(){
    return(
        <body>
            <header className="header">
                <h1>Contact Us</h1>
            </header>
            <div className="main-content">
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form id="contactForm">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" className="form-input" required/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" className="form-input" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
                <div className="social-links">
                    <h2>Connect with Us</h2>
                    <ul>
                        we can provide our socials and contact links
                    </ul>
                </div>
            </div>
            <script src="script.js"></script>
        </body>
    )
}