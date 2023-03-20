import "./HomePageCss.css";
import Teste from "../../assets/testeImage.jpg";

function HomePage() {
  return (
    <>
      <div className="contentHomePage">
        <div className="image">
          <img src={Teste} alt="Teste" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
