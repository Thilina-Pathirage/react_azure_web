import "./App.css";
import Sample from './components/Sample'; 
import Navbar from './components/Navbar';
import Gay from './components/GayAshan';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sample/>
      <Gay/>
      <Footer/>
    </div>
  );
}

export default App;
