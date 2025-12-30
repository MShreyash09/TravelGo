import { Link } from "react-router-dom";
import '../css/home.css'
export default function Home() {
      return (
            <>

                  <h1 className="title1">Welcome to TravelGo!</h1>
                  <div className="start-page">
                        <img src="indeximg.jpg"  alt="mainimage" />
                        <h2>Explore the world with us</h2>
                        <p>Your adventure starts here.</p>
                        <Link to="/destination"><button type="button">Explore Destinations</button></Link>
                  </div>

            </>
      );
}