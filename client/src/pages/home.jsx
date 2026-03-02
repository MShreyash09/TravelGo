import { Link } from "react-router-dom";
import "../css/home.css";
import { useTranslation } from "../hooks/useTranslation";

export default function Home() {
      const title = useTranslation("Welcome to TravelGo!");
      const subtitle = useTranslation("Explore the world with us");
      const desc = useTranslation("Your adventure starts here.");
      const btnText = useTranslation("Explore Destinations");

      return (
            <>
                  <h1 className="title1">{title}</h1>
                  <div className="start-page">
                        <img src="indeximg.jpg" alt="mainimage" />
                        <h2>{subtitle}</h2>
                        <p>{desc}</p>
                        <Link to="/destination">
                              <button type="button">{btnText}</button>
                        </Link>
                  </div>
            </>
      );
}