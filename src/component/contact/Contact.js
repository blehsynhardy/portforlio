import './contact.css';

const Contact = () => {
    return  (
        <section id="contact">
            <h5>Contact</h5>
            <h2>Contact Us</h2>

            <div className="container container__contact">
                <div className="contact__options">
                    <article className="contact__option">
                        <h4>Email</h4>
                        <h5>blessingawodele@mgmail.com</h5>
                        <a href="mailto:blessingawodele@gmail.com">Send a message</a>
                    </article>
        
                    <article className="contact__option">
                        <h4>Facebook</h4>
                        <h5>blessingawodele@mgmail.com</h5>
                        <a href="mailto:blessingawodele@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <h4>Whatsapp</h4>
                        <h5>blessingawodele@mgmail.com</h5>
                        <a href="mailto:blessingawodele@gmail.com">Send a message</a>
                    </article>
                </div>

                {/*  New form  */}

                <form action="">
                    <input type='text' name='name' placeholder='Your full name' required />
                    <input type='email' name='name' placeholder='Your Email Address' required />
                    <textarea name="message" rows='7' placeholder='Your Message'></textarea>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>

            </div>
        </section>
     
    )
}

export default Contact;