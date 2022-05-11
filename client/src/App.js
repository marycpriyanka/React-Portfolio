import "./css/reset.css";
import "./css/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About></About>
      <Footer />
    </div>
  );
}

export default App;
