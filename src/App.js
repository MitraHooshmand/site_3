import "./App.css";
import Navbar from "./components/navbar.js";
import Banner from "./components/banner.js";
import Cards from "./components/Cards.js";
import Searchbox from "./components/Searchbox";
import Logos from "./components/Logos.js";
import Footer from "./components/Footer.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
        <Cards />
        <Searchbox />
        <Logos />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
