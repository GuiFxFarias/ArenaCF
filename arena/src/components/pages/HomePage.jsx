import "./HomePageCss.css";
import "animate.css";
import Teste from "../../assets/testeImage.jpg";

function HomePage() {
  return (
    <>
      <div className="contentHomePage">
        <div className="image"></div>
        <div className="choicePlanes">
          <h1>Escolha seu plano</h1>
          <section className="planes">
            <div className="planesPay animate__animated animate__delay-1s animate__backInLeft">
                <h1 className="price">120,00</h1>
            </div>
            <div className="planesPay animate__animated animate__backInDown animate__delay-1s">

            </div>
            <div className="planesPay animate__animated animate__backInRight animate__delay-1s">

            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
