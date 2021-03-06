import "./css/reset.css";
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Work  from "./pages/Work";
import Resume from "./pages/Resume";

// Imports list of projects from project.js
import projects from "./data/projects";
import skills from "./data/skills";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<Work projects={projects}/>}></Route>
          <Route path="/resume" element={<Resume skills={skills}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
