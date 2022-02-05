import './App.css';
import Navbar from "./components/navbar.js"
import Banner from "./components/banner.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Banner/>
      </header>
    </div>
  );
}

export default App;
