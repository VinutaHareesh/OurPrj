import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./componet/header";
import Footer from './componet/footer';
import FroentPage from "./pages/froentPage";
import ComingSoon from "./pages/comingSoon";
import Soon from "./componet/Soon";
import About from './pages/aboutUs';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/" element={<FroentPage />} />
          <Route path="/AboutUs" element={<About />} />
          {/* <Route path="/ComingSoon" element={<ComingSoon />} /> */}
          <Route path="/ComingSoon" element={<Soon />} />          
        </Routes>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
