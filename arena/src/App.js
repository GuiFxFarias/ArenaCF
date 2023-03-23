import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main";
import Navbar from "./components/layout/Navbar";
import MainMobile from "./components/layout/MainMobile";

import HomePage from "./components/pages/HomePage";
import Ranking from "./components/pages/Ranking";
import Movimentos from "./components/pages/Movimentos";

function App() {
  return (
    <>
      <Router>
        <MainMobile>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Ranking" element={<Ranking />}></Route>
              <Route path="/Movimentos" element={<Movimentos />}></Route>
            </Routes>
          </Main>
        </MainMobile>
      </Router>
    </>
  );
}

export default App;
