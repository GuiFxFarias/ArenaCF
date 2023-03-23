import "./MainCss.css";

function Main(props) {
  return (
    <>
      <main className="pages p1">{props.children}</main>
    </>
  );
}

export default Main;
