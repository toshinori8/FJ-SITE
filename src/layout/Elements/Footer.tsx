import FadeIn from "./FadeIn";
import KontaktForm from "./KontaktForm";

function Footer() {
  return (
    <>
      <section id="footer">
        <FadeIn>
          {" "}
          <div className="inner">
            <br />
            <br></br>
            <h2 className="major">Zostaw wiadomość lub skontktuj się z nami</h2>
            <br />
            <br></br>
            <p>
              W celu dokonania wstepnej wyceny prosimy o załączenie zdjęć w
              poniszym formularzu.
            </p>
            <br /> <br /> <br />
            <KontaktForm />
            <div className="contactInfo">
              <ul className="contact">
                <li className="icon solid fa-home">
                  FJ ŁUKASZ JELEŃ
                  <br />
                  Stronie 248
                  <br />
                  34-145 Stronie
                </li>
                <li className="icon solid fa-phone">
                  <a href="tel:+48798141832">(+48) 798 141 832</a>
                </li>
                <li className="icon solid fa-envelope">
                  <a href="/login">information@untitled.tld</a>
                </li>
                <li className="icon brands fa-twitter">
                  <a href="twitter"></a>
                </li>
                <li className="icon brands fa-facebook-f">
                  <a href="#">facebook.com/untitled-tld</a>
                </li>
                <li className="icon brands fa-instagram">
                  <a href="#">instagram.com/untitled-tld</a>
                </li>
              </ul>
            </div>
            <FadeIn>
              <ul className="copyright">
              <br></br><br></br><br></br>
                <li>&copy; FJ Łukasz Jeleń wszelkie prawa zastrzeone.</li>
                <li>
                  Code: <a href="http://stream404.art.pl">Stream404</a> /
                  Template: <a href="http://html5up.net">HTML5 UP</a>
                </li>
                <br></br>
              </ul>
            </FadeIn>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

export default Footer;
