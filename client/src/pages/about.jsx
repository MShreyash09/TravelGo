import "../css/about.css";
import { useTranslation } from "../hooks/useTranslation";

export default function About() {
      const title = useTranslation("About TravelGo");
      const p1 = useTranslation(
            "At TravelGo, we believe that traveling is more than just moving from one place to another — it’s about creating memories, experiencing new cultures, and finding adventures that stay with you forever."
      );
      const p2 = useTranslation(
            "Whether you’re a thrill-seeker chasing adrenaline, a family looking for a relaxing getaway, or a solo traveler eager to discover hidden gems, we’re here to make your journey effortless and exciting."
      );
      const p3 = useTranslation(
            "🌍 From booking the perfect stays to curating must-visit destinations, our platform is designed to guide you every step of the way. We combine convenience, comfort, and expert recommendations to ensure your trips are not only smooth but also unforgettable."
      );
      const missionTitle = useTranslation("✨ Our Mission");
      const m1 = useTranslation("Inspire you with handpicked destinations.");
      const m2 = useTranslation("Make travel planning stress-free and enjoyable.");
      const m3 = useTranslation(
            "Connect you with authentic experiences that bring out the explorer in you."
      );
      const m4 = useTranslation(
            "With TravelGo, your dream destinations are just a click away. Pack your bags, leave the planning to us, and get ready to explore the world the TravelGo way!"
      );

      return (
            <>
                  <main className="about-page">
                        <h1>{title}</h1>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                        <h2>{missionTitle}</h2>
                        <ul className="mission-list">
                              <li>{m1}</li>
                              <li>{m2}</li>
                              <li>{m3}</li>
                              <li>{m4}</li>
                        </ul>
                  </main>
            </>
      );
}