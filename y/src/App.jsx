import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import User from "./Pages/User";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;