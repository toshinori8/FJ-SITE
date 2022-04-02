import { useRouter } from 'next/router';

import { Meta } from '@/layout/Elements/Meta';
import { Pielegnacja_template } from '@/templates/Pielegnacja_template';
import RealizacjeIndex from '@/layout/Realizacje/RealizacjeIndex';
import FuturesHome from '@/layout/Elements/FuturesHome';
import Footer from '@/layout/Elements/Footer';

import Hand_svg from '@/layout/Elements/hand_svg';
import Blueprint_svg from '@/layout/Elements/blueprint_svg';
import FadeIn from '@/layout/Elements/FadeIn';

import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import { Element } from "react-scroll/modules";


const Pielegnacja = () => {
  const router = useRouter();

  const scrollToTop = function () {
    scroll.scrollToTop();
  };

  return (
    <Pielegnacja_template
      meta={
        <Meta
          title="Pielęgnacja ogrodów"
          description="Projektowanie, Pielęgnacja i realizacja ogrodów "
          
        />
      }
    >

      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

      <link rel="stylesheet" href="../../assets/pielegnacja/css/icomoon.css"></link>
      <link rel="stylesheet" href="../../assets/pielegnacja/css/style.css"></link>
      <link rel="stylesheet" href="../../assets/pielegnacja/css/ionicons.min.css"></link>
      <link rel="stylesheet" href="../../assets/pielegnacja/css/flaticon.css"></link>







      <div className="hero-wrap js-fullheight" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">

          <FadeIn >
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
              <div className="col-md-6 ftco-animate">
                {/* <h2 className="subheading">Witaj w FJ Pielęgnacja ogrodów</h2> */}
                <h1>Piękno ogrodów dla każdego</h1>         
                <p className="mb-4 subheading">Sprawdz co moemy zrobić dla twojego ogrodu</p>
                {/* <p><a href="#" className="btn btn-primary mr-md-4 py-2 px-4">Nasze usługi<span className="ion-ios-arrow-forward"></span></a></p> */}
              </div>

            </div>
          </FadeIn>

        </div>
      </div>


      {/* sekcja przyciski */}
      <section className="ftco-section ftco-no-pt minHeight ikony_trzy" >
        <div className="container">
          <div className="row">

            <FadeIn>
              <div className="col-lg-12 services-wrap px-4 pt-5">
                <div className="row pt-md-3">
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="services text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flatIcon"><Blueprint_svg /></span>
                      </div>
                      <div className="text">
                        <h3>Projektowanie</h3>
                        <ul>
                          <li><span>Ogrodów zielonych i rezydencyjnych</span></li>
                          <li><span>Aranżacja zieleni we  wnętrzach, tarasach, balkonach</span></li>


                        </ul>
                      </div>
                      <Link className="btn-custom d-flex align-items-center justify-content-center" to="projektowanie" smooth={true}><span className="ion-ios-arrow-round-forward"></span> </Link>
                      {/* <a href="#projektowanie"  onClick={(event) => scroll.scrollTo(100, { containerId:"projektowanie" }) } className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a> */}
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="services text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flatIcon"><Hand_svg /> </span>
                      </div>
                      <div className="text">

                      
                        <h3>Kompleksowa realizacja</h3>
                        <ul>

                          <li><span>Wyznaczanie nasadzeń roślin</span></li>
                          <li><span>Zakładanie trawników</span></li>
                        </ul>
                      </div>
                      <Link className="btn-custom d-flex align-items-center justify-content-center" to="realizacja" smooth={true}><span className="ion-ios-arrow-round-forward"></span> </Link>
                      {/* <a href="#realizacja" className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a> */}
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-stretch">
                    <div className="services text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-lawn-mower"></span>
                      </div>
                      <div className="text">
                        <h3>Pielęgnacja ogrodu</h3>
                        <ul>

                          <li><span>Pielęgnacja roślin</span></li>
                          <li><span>Uzupełnianie i odnowa nasadzeń</span></li>
                          <li><span>Pielęgnacja trawników</span></li>
                          <li><span>Nawoenie drzew, krzewów, bylin</span></li>
                          <li><span>Odchwaszczanie rabat</span></li>
                          <li><span>Zakładanie łąk kwietnych</span></li>
                          <li><span>Grabienie liści</span></li>
                          <li><span>Przycinanie rzywopłotów</span></li>

                        </ul>
                      </div>
                      <Link className="btn-custom d-flex align-items-center justify-content-center" to="pielegnacja" smooth={true}><span className="ion-ios-arrow-round-forward"></span> </Link>

                      {/* <a href="#pielegnacja" className="btn-custom d-flex align-items-center justify-content-center"><span className="ion-ios-arrow-round-forward"></span></a> */}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* sekcja odstęp  */}
   

      {/* sekcja projektowanie  */}

      <section id="projektowanie" className="ftco-section ftco-no-pt ftco-no-pb bg-light pielegnacja_task">
        <div className="container" >
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end image_projektowanie"

              >   <span className="flatIcon"><Blueprint_svg /></span>
                {/* <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
    						<span className="icon-play"></span>
    					</a> */}
              </div>
            </div>
            <div className="col-md-6 pl-md-5">
              <div className="row justify-content-start py-5">
                <div className="col-md-12 heading-section ftco-animate">

                <br/><br/>
                  <h2 className="mb-4">Projektowanie<br/>ogrodów</h2>
                  <span className="subheading">Etapy projektowania</span>
                  <br />

                  <hr />
                  <div className="services-wrap services-box">
                    <div className="services-list">Wizyta w miejscu inwestycji
                      <span className="ovalNumber">1</span>
                    </div>
                    <p className="slideText">Podczas pierwszego spotkania na działce będziemy mogli zapoznać się z Państwa oczekiwaniami i sugestiami, jak równiez obejrzeć teren który będzie objęty projektem</p>

                    <hr />
                    <div className="services-list">Projekt koncepcyjny
                      <span className="ovalNumber">2</span>
                    </div>
                    <p className="slideText">
                      Dokonanie szczegółowego pomiaru terenu.
                      </p>
<p>                      Po poprawkach a puźniejszej akceptcji projektu tworzymy projekt finalny. 
                      Tworzenie projektu (wizualizacja 3D).
                    </p>
                    <hr />
                    <div className="services-list">Projekt finalny
                      <span className="ovalNumber">3</span>
                    </div>
                    <p className="slideText">
                      W zaleności od wczesniejszych ustaleń projekt zawiera:
                      <br />
                    </p>
                    <ul>
                      <li>rzut projektu</li>
                      <li>wykaz projektowanych roślin</li>
                      <li>wizualizacja zaprojektowanej przestrzeni 3D</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* sekcja odstęp kontajkt */}
      <section className="distance">

        

      </section>

{/* sekcja kompleksowa realizacja  */}

<section className="ftco-section ftco-no-pt ftco-no-pb bg-light realizacja_task">
        <div className="container"  id="realizacja">
          <div className="row d-flex">
            
          <div className="col-md-6 pl-md-5">
              <div className="row justify-content-start py-5">
                <div className="col-md-12 heading-section ftco-animate">
                <br/><br/>
                  <h2 className="mb-4">KOMPLEKSOWA<br/>REALIZACJA
</h2>
                  {/* <span className="subheading">Etapy projektowania</span> */}
                  <br />

                  
                  
                  <hr />
                    <p className="slideText first subheading">Wyznaczenie nasadzeń roślin</p>
                  
                    <p className="slideText">
                      Wykonujemy nasadzenia roślin z odpowiednim doborem podłoża.
                      
                    </p>
                    
                    <p>Dbamy, aby jakość każdej z roślin była jak najwyzsza.</p>
                    
                 
                    <hr />
                    <p className="slideText first subheading">
                      
                      Zakładanie trawników
                    
                    </p>
                  
                    <p>Oferujemy zakładanie trawników z rolki i z siewu</p>
                    

                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              
              
              
              <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end image_realizacja"
              
              >
                 
              
                <span className="flatIcon"><Hand_svg /></span>
                {/* <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
    						<span className="icon-play"></span>
    					</a> */}
              </div>
            </div>
           
          </div>
        </div>
      </section>



      <Footer />
      <a href="#" className="asd" onClick={scrollToTop}>scroller xxx</a>

    </Pielegnacja_template>
  );
};

export default Pielegnacja;
