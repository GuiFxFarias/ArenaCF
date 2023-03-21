import "./HomePageCss.css";
import "animate.css";
import Teste from "../../assets/testeImage.jpg";

function HomePage() {
  return (
    <>
      <div className="contentHomePage">
        <div className="image">
          <h1 className="freeTest">VENHA JA FAZER SEU TESTE GRATIS</h1>
        </div>
        <div className="choicePlanes">
          <h1>Escolha seu plano</h1>
          <section className="planes">
            <div className="planesPay animate__animated animate__delay-1s animate__backInLeft">
              <div className="iconPrice">
                <h1 className="planePrice">Plano anual</h1>
                <h2 className="price">R$ 125,00</h2>
              </div>
            </div>
            <div className="planesPay animate__animated animate__backInDown animate__delay-1s">
              <div className="iconPrice">
                <h1 className="planePrice">Plano Semestral</h1>
                <h2 className="price">R$ 189,00</h2>
              </div>
            </div>
            <div className="planesPay animate__animated animate__backInRight animate__delay-1s">
              <div className="iconPrice">
                <h1 className="planePrice">Plano mensal</h1>
                <h2 className="price">R$ 215,00</h2>
              </div>
            </div>
          </section>
        </div>
        <div className="teacher">
          <h1>Professores</h1>
          <section className="flexTeachers">
            <div className="teachers">
              <div className="picTeacher T1"></div>
              <div className="textTeacher"></div>
            </div>
            <div className="teachers">
              <div className="picTeacher T2"></div>
              <div className="textTeacher"></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
