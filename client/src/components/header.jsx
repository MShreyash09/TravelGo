import { Link } from 'react-router-dom'
import '../css/header.css'

export default function Header() {
      return (
            <>
                  <header>
                        <Link to="/">Home</Link>
                        {/* <Link to="/home">Home</Link> */}
                        <Link to="/destination">Destination</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                  </header>
            </>
            
      );
}
