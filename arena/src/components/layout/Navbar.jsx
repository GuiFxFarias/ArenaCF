import "./NavCss.css";
import { HiMenuAlt1 } from "react-icons/hi";
import SimbolArena from "../../assets/ArenaCf-Simbol.png";
import { useState } from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  const [show, setShow] = useState(true);
  const [opacity, setOpacity] = useState("displayNone");
  const [click, setClick] = useState("");

  function showState() {
    setShow(!show);
    if (show === true) {
      setClick("clicked");
      setOpacity("displayShow");
      console.log(click);
    } else {
      setClick("");
      setOpacity("displayNone");
      console.log(click);
    }
  }

  return (
    <>
      <header>
        {" "}
        <nav className="navbar">
          <div className="nameAndSimbol">
            <img src={SimbolArena} alt="ArenaCF" />
            <span
              style={{
                backgroundColor: "#eb2429 ",
                color: "white",
                padding: "5px",
              }}
            >
              <h1 style={{ margin: 0 }}>ARENA CF</h1>
            </span>
          </div>
          <ul className="list">
            {/* <li className="itemList">Home</li>
            <li className="itemList">Ranking</li>
            <li className="itemList">Movimentos</li> */}
            <li className="itemList">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="itemList">
              <Link to={"/Ranking"}>Ranking</Link>
            </li>
            <li className="itemList">
              <Link to={"/Movimentos"}>Movimentos</Link>
            </li>
          </ul>
        </nav>
        <nav className={`navbarMobile ${click}`}>
          <div className="menu">
            <HiMenuAlt1 onClick={showState} />
          </div>
          <ul className={`listMobile ${opacity}`}>
            <li className="itemMobile" onClick={showState}>
              Home
            </li>
            <li className="itemMobile" onClick={showState}>
              Ranking
            </li>
            <li className="itemMobile" onClick={showState}>
              Movimentos
            </li>
          </ul>
          <div className="simbolMobile">
            <img src={SimbolArena} alt="ArenaCF" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
