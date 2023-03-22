import "./HomePageCss.css";
import "animate.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warn("Preencha os dados", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_pp1d129",
        "template_zbctdlj",
        templateParams,
        "Y5m61D_i3_5IlyitC"
      )
      .then(
        (res) => {
          console.log("Email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email enviado", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (err) => {
          console.log("ERRO: ", err);
          toast.error("Email nao foi enviado", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  }

  return (
    <>
      <div className="contentHomePage">
        <div className="image">
          <h1 className="freeTest">VENHA JA FAZER SEU TESTE GRATIS</h1>
        </div>
        <div className="choicePlanes">
          <h1 className="h1Plane">Escolha seu plano</h1>
          <section className="planes">
            <div className="planesPay animate__animated animate__delay-1s animate__zoomIn">
              <div className="iconPrice">
                <h1 className="planePrice">Plano fidelidade 12 meses</h1>
                <h2 className="price">R$ 129,90 (mensal)</h2>
              </div>
            </div>
            <div className="planesPay animate__animated animate__zoomIn animate__delay-1s">
              <div className="iconPrice">
                <h1 className="planePrice">Plano Semestral</h1>
                <h2 className="price">R$ 189,90</h2>
              </div>
            </div>
            <div className="planesPay animate__animated animate__zoomIn animate__delay-1s">
              <div className="iconPrice">
                <h1 className="planePrice">Mes avulso</h1>
                <h2 className="price">R$ 215,00</h2>
              </div>
            </div>
          </section>
        </div>
        <div className="teacher">
          <h1 className="marginProfessor">Professores</h1>
          <section className="flexTeachers">
            <div className="teachers">
              <div className="picTeacher T1"></div>
              <div className="textTeacher">
                <h1 className="name n1">Raquel Gomes</h1>
                <h2>ou</h2>
                <h1 className="name">Quell</h1>
                <ul className="biography">
                  <li>
                    <strong>Idade</strong> : 21
                  </li>
                  <li>
                    <strong>Altura</strong> : 160 cm
                  </li>
                  <li>
                    <strong>Formacao</strong> : Educacao fisica
                  </li>
                  <li>
                    <strong>Locais de treino</strong> : Academia Pacer e Arena
                    CF
                  </li>
                  <li>
                    <strong>Contato</strong> : 16 99258-7319
                  </li>
                  <li>
                    <strong>Instagram</strong> :{" "}
                    <a
                      href="https://www.instagram.com/coach_quellcgomes/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      @coach_quellcgomes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="teachers">
              <div className="picTeacher T2"></div>
              <div className="textTeacher">
                <h1 className="name n1">Daniel Gomes</h1>
                <h2>ou</h2>
                <h1 className="name">Dani burpee</h1>
                <ul className="biography">
                  <li>
                    <strong>Idade</strong> : 27
                  </li>
                  <li>
                    <strong>Altura</strong> : 170 cm
                  </li>
                  <li>
                    <strong>Formacao</strong> : Educacao fisica e crossfit
                  </li>
                  <li>
                    <strong>Locais de treino</strong> : Arena CF
                  </li>
                  <li>
                    <strong>Contato</strong> : 16 99112-1006
                  </li>
                  <li>
                    <strong>Instagram</strong> :{" "}
                    <a
                      href="https://www.instagram.com/coach_danielg/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @coach_danielg
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <h1 className="nameArenaBio">Biografia</h1>
          <section className="bioArena">
            <div className="photoArena"></div>
            <div className="textArena">
              <p>
                A Arena CF iniciou como um sonho de ter um box de crossfit, o
                Daniel (professor e sócio) sempre teve essa vontade de ter seu
                própio "cantinho". Começou dando aulas na antiga CrossLife,
                depois foi para a Crossfit Fellow e lá teve seu maior "upgrade"
                se podemos dizer assim, fez diversos cursos de crossfit e desde
                então continuou estudando e se aprimorando cada vez mais. Depois
                de se sentir pronto fundou a Arena, inicialmente sozinho e
                depois de um tempo sua irmã, Raquel (professora e sócia), entrou
                com ele para continuar a Arena. Raquel que além de dar aulas de
                crossfit, é também uma personal trainer, dando aulas para
                adultos, idosos e crianças. Os dois juntos sempre se esforçando
                ao máximo para fazer de um exercício físico, algo divertido e
                prazeroso.
              </p>
            </div>
          </section>
          <h1 style={{ margin: "1em " }} className="contactName">
            Entre em contato
          </h1>
          <section className="contact">
            <form action="">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={message}
                  placeholder="Mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn" onClick={sendEmail}>
                  Enviar mensagem
                </button>
              </fieldset>
            </form>
            <div className="map">
              <iframe
                title="locationArena"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.989586590332!2d-47.967507285459334!3d-21.152605494967986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b998f11893a6c7%3A0x7ab6037b4ba42c4!2sR.%20Rodrigo%20Henrique%20Montenegro%2C%20185%20-%20Cidade%20Jardim%2C%20Sert%C3%A3ozinho%20-%20SP%2C%2014169-424!5e0!3m2!1spt-BR!2sbr!4v1679483825952!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default HomePage;
