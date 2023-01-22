import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <div className="RMSM">
          <div>
            <Routes>  
              <Route element={<Layout />}>
                <Route path="/main" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/projects/:id" element={<Project />} /> */}
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
