import Header from "../components/header";
import Footer from "../components/footer";
import '../css/about.css'

export default function About() {
      return (
            <>
                  <Header />

                  <main class="about-page">
                        <h1>About TravelGo</h1>
                        <p>
                              At <strong>TravelGo</strong>, we believe that traveling is more than just moving from one place to another — 
                              it’s about <em>creating memories</em>, experiencing new cultures, and finding adventures that stay with you forever.
                        </p>

                        <p>
                              Whether you’re a thrill-seeker chasing adrenaline, a family looking for a relaxing getaway, 
                              or a solo traveler eager to discover hidden gems, we’re here to make your journey effortless and exciting.
                        </p>

                        <p>
                              🌍 From booking the perfect stays to curating must-visit destinations, our platform is designed to guide you every step of the way. 
                              We combine convenience, comfort, and expert recommendations to ensure your trips are not only smooth but also unforgettable.
                        </p>

                        <h2>✨ Our Mission</h2>
                        <ul className="mission-list">
                              <li>Inspire you with handpicked destinations.</li>
                              <li>Make travel planning stress-free and enjoyable.</li>
                              <li>Connect you with authentic experiences that bring out the explorer in you.</li>
                              <li>With TravelGo, your dream destinations are just a click away. Pack your bags, leave the planning to us, and get ready to explore the world the TravelGo way!</li>
                        </ul>
                  </main>

                  <Footer />
            </>
      );
}