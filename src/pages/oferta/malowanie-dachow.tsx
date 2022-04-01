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
              POZNAJ TECHNOLOGIĘ I PROCES MALOWANIA DACHÓW, Czyszczenia ORAZ
              IMPREGNACJI
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
              <br />
              <br />
              <p className="text-center">
                Betonowe, cementowe, ceramiczne, angobowane, szkliwione,
                glazurowane ,blaszane, blachodachówka, gont, papa.
              </p>

              <br />
              <p className="text-center">W każdym rozmiarze i kształcie.</p>
              <br />
              <br />
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
                W naszej pracy wykorzystujemy sprzęt alpinistyczny co zapewnia
                bezpieczeństwo pracy oraz dotarcie do każdego miejsca i
                szczegółu na dachu. Nie potrzebujemy miejsca na rusztowanie
                wokół inwestycji.
                <br />
                <br />
                Nakładanie kolejnych powłok malarskich wykonujemy przy pomocy
                agregatu hydrodynamicznego z podajnikiem o długości 30m, który
                pod ciśnieniem 210Bar dostarcza farbę dokładnie w miejsce
                opracowywanego pokrycia dachowego lub na zyczenie klienta metodami tradycyjnymi (pędzel, szczotka).
              </p>
              <div className="brake_list"> </div>
              <p>
                <span className="image right">
                  <img src="/assets/images/malowanie/dachy_2.jpg" alt="" />
                </span>
                Długotrwała jakość i gwarancja jakości to nie tylko stosowanie
                profesjonalnych farb to przede wszystkim
                przygotowanie podłoża. Dlatego kładziemy duży nacisk na
                przygotowanie powierzchni w zależności od rodzaju pokrycia
                dachowego poprzez:
              </p>

              <br />

              <br />
              <ul className="how-steps list_ordered">
                <li>
                  Zabezpieczenie okien, kominów, koszy oraz miejsc narażonych na
                  uszkodzenie. Miejsca newralgiczne, trudnodostepne malowane są
                  ręcznie za pomocą pędzla.
                </li>
                <li>
                  Mycie dachu pod wysokim ciśnieniem wodą z dodatkiem
                  neutralizującym i zmiękczającym zabrudzenia (mchy, grzyby i
                  porosty).
                </li>
                <li>Usunięcie wszystkich niestabilnych powłok i materiałów.</li>
                <li>Usunięcie i neutralizacja chemiczna rdzy.</li>
                <li>
                  Wykonanie wszelkich możliwych napraw dekarskich (izolacja
                  komina, uzupełnienie dachówek i powłok).<div className='over'></div>
                </li>

                <li>
                  Nałożenie środka głęboko penetrującego, który neutralizuje
                  algi, mchy, grzyby i porosty, blokuje powstawanie nowych i
                  zwiększa tym przyczepność farby do dachówki.
                </li>

                <li>
                  Zastosowanie biocydu do wybranych farb rozpuszczalnikowych, co
                  powoduje dodatkową neutralizację zabrudzeń.
                </li>

                <li>
                  Malowanie dachówek agregatem hydrodynamicznym. pod wysokim
                  ciśnieniem (230 bar).
                </li>

                <li>
                  Druga warstwa farby. Wyrównanie powierzchni i nadanie gładkiej
                  struktury z odpowiednim połyskiem wg zamówienia.
                </li>
              </ul>

              <div className="brake_list"> </div>
            </section>
          </div>
        </div>

        <div className="wrapper no_top no_bottom">

          <div className="inner">

            <div className="container-grid" id="gallerGrid">


              <div className="box span">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/01.jpg" />
              </div>

              <div className="box">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/2.jpg" />
              </div>

              <div className="box">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/6.jpg" />
              </div>

              <div className="box span">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/02.jpg" />
              </div>

              <div className="box span">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/6.jpg" />
              </div>

              <div className="box  ">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/1.jpg" />
              </div>

             
            





            </div>

          </div>


        </div>

        <div className="wrapper no_top">
          <div className="inner">
            <section>
              <h4 className="text-center	"> Na jakich budynkach? </h4>

              <br />
              <br />
              <p className="text-center">
                Doświadczenie zdobyliśmy malując dachy na komercyjne inwestycje oraz
                . Ale z powodzeniem zajmujemy się także domami
                jednorodzinnymi.
              </p>
              <br />
              <h4 className="text-center">
                Doradzamy w doborze koloru i materiałów. <br />
                Zgodnie z charakterystyką inwestycji
              </h4>
              <br />

             
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </Malowanie_template>
  );
};

export default Malowanie;
