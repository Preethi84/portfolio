export default function Contact(){
    return (
        <section id="Contact" className="contact-section">
            <div>
                <p className="sub-title">Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact-form-container">
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact-input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">last Name</span>
                        <input type="text" className="contact-input text-md" name="last-name" id="last-name" required />
                    </label>
                     <label htmlFor="email" className="contact-label">
                        <span className="text-md">email</span>
                        <input type="email" className="contact-input text-md" name="email" id="email" required />
                    </label>
                     <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">phone</span>
                        <input type="number" className="contact-input text-md" name="phone-number" id="phone-number" required />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact-label">
                        <span className="text-md">Choose Topic</span>
                        <select name="" id="choose-topic" className="contact-input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>SItem 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact-label">
                        <span className="text-md">Choose Topic</span>
                        <textarea className="contact-input text-md" id="message" rows="8" placeholder="type your message" />
                    </label>
                    <label htmlFor="checkbox" className="checkbox-label">
                        <input type="checkbox" required name="checkbox" id="checkbox" />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact-form-btn">Submit</button>
                    </div>
            </form>
        </section>
    )
}