import { useRouter } from "next/router";

import { Meta } from "@/layout/Elements/Meta";
import { Malowanie_template } from "@/templates/Malowanie_template";
import RealizacjeIndex from "@/layout/Realizacje/RealizacjeIndex";
import FuturesHome from "@/layout/Elements/FuturesHome";
import Footer from "@/layout/Elements/Footer";

const Malowanie = () => {
  const router = useRouter();

  return (
    <Malowanie_template
      meta={
        <Meta
          title="Malowanie dachów"
          description="Malowanie dachówki, czyszczenie impregnacja"
        />
      }
    >
      <section id="wrapper">
        <header>
          <div className="inner">
            <h2>Malowanie dachów</h2>
            <p>
            POZNAJ TECHNOLOGIĘ I PROCES MALOWANIA DACHÓW, Czyszczenia ORAZ IMPREGNACJI

            </p>
          </div>
        </header>

        <div className="wrapper no_bottom ">
          <div className="inner">
            <section>
              <h4 className="text-center	"> Jakie dachy malujemy? </h4>
              <div className="centeredImages">
                <div className="imageCentered">
                  <img
                    src="/assets/images/malowanie/dachy_ceramiczne.jpg"
                    alt="Malowanie dachów ceramicznych"
                  />
                </div>
                <div className="imageCentered">
                  <img
                    src="/assets/images/malowanie/dachy_cementowe.jpg"
                    alt="Malowanie dachów ceramicznych"
                  />
                </div>
                <div className="imageCentered">
                  <img
                    src="/assets/images/malowanie/dachy_blaszane.jpg"
                    alt="Malowanie dachów ceramicznych"
                  />
                </div>
                <div className="imageCentered">
                  <img
                    src="/assets/images/malowanie/dachy_blachodachowka.jpg"
                    alt="Malowanie dachów ceramicznych"
                  />
                </div>
              </div>
              <br/><br/>
              <p className="text-center">
                
              Betonowe, cementowe, ceramiczne, angobowane, szkliwione, glazurowane ,blaszane,  blachodachówka, gont, papa. 
                            </p>

<br/>
<p className="text-center">W każdym rozmiarze i kształcie.
</p>
<br/><br/>


     

            </section>
          </div>
        </div>

        <div className="wrapper no_bottom no_top">
          <div className="inner">
            <section>
              <p>
                <span className="image left">
                  <img src="/assets/images/malowanie/dachy_1.jpg" alt="" />
                </span>
                W naszej pracy wykorzystujemy sprzęt alpinistyczny co zapewnia bezpieczeństwo pracy oraz dotarcie do każdego miejsca i szczegółu na dachu. 
                <br/><br/>  

                Nakładanie kolejnych powłok malarskich wykonujemy przy pomocy agregatu hydrodynamicznego z podajnikiem o długości 30m, który pod ciśnieniem 210Bar dostarcza farbę dokładnie w miejsce opracowywanego pokrycia dachowego. Dzieki temu farbę wtłaczamy w każdą szczelinę pokrycia.
              </p>
              <div className="brake_list"> </div>
              <p>
                <span className="image right">
                  <img src="/assets/images/malowanie/dachy_2.jpg" alt="" />
                </span>
                Długotrwała jakość i gwarancja jakości to nie tylko stosowanie profesjonalnych powłok lakierniczych to przede wszystkim przygotowanie podłoża. Dlatego kładziemy duży nacisk na przygotowanie powierzchni w zależności od rodzaju pokrycia dachowego poprzez:
              </p>

<br/>
              <hr/>
        <br/>

            <ul className="list_ordered">
              <li>Wysokociśnieniowe mycie</li> 
              <li>Odtłuszczenie</li> 
              <li>Odgrzybienie</li>

                <li>Usunięcie rdzy</li>
                <li>Usunięcie nalotów ................... </li>

              <li>Wykonanie wszelkich możliwych napraw</li>
              </ul>
              <div className="brake_list"> </div>
            </section>
          </div>
        </div>

        <div className="wrapper no_top">
          <div className="inner">
            <section>
              <div className="box alt">
                <div className="row gtr-uniform">
                  <div className="col-12">
                    <span className="image fit">
                      <img src="/assets/images/1.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/2.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/6.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/7.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/7.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/5.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/6.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/6.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/7.jpg" alt="" />
                    </span>
                  </div>
                  <div className="col-4">
                    <span className="image fit">
                      <img src="/assets/images/5.jpg" alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </Malowanie_template>
  );
};

export default Malowanie;
