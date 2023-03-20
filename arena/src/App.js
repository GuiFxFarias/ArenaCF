import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import MainMobile from "./components/layout/MainMobile";

function App() {
  return (
    <>
      <MainMobile>
        <Navbar />
        <Home />
      </MainMobile>
    </>
  );
}

export default App;
