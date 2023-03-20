import "./App.css";
import Main from "./components/pages/Main";
import Navbar from "./components/layout/Navbar";
import MainMobile from "./components/layout/MainMobile";

function App() {
  return (
    <>
      <MainMobile>
        <Navbar />
        <Main />
      </MainMobile>
    </>
  );
}

export default App;
