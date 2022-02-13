import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Blog from "./pages/blog";

function App() {
  return (
    <BrowserRouter>
      <div className="w-60  mx-auto">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
