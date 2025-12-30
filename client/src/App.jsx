import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Template from "./pages/template";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Template />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
