import Header from "../components/header";
import Footer from "../components/footer";
import '../css/contact.css'


export default function Contact() {
      return (
            <>
                  <Header />

                  <main>
                        <h1>Contact Us</h1>
                        <p>If you have any questions or need assistance, feel free to reach out to us.</p>

                        <form action="#">
                        <div className="contact-name">
                              <label for="name">Name:</label>
                              <input type="text" id="name" name="name" required />
                        </div>

                        <div>
                              <label for="email">Email:</label>
                              <input type="email" id="email" name="email" required />
                        </div>

                        <div>
                              <label for="mobile">Contact Number :</label>
                              <input type="text" id="mobile" name="mobile" required />
                        </div>

                        <div>
                              <label for="message">Message:</label><br />
                              <textarea id="message" name="message" rows="4"  cols="30"></textarea>
                        </div>

                        <button type="submit">Send Message</button>
                        </form>
                  </main>

                  <Footer />

            </>
      );
}