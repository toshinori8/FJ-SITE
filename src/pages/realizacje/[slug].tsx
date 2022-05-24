import { useRouter } from "next/router";

import { Meta } from "@/layout/Elements/Meta";
import { Malowanie_template } from "@/templates/Malowanie_template";
import RealizacjeIndex from "@/layout/Realizacje/RealizacjeIndex";
import FuturesHome from "@/layout/Elements/FuturesHome";
import Footer from "@/layout/Elements/Footer";
import { ReactChild, ReactFragment, ReactPortal } from "react";




export default function  Malowanie(props: { slug: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, context: any) {
  const router = useRouter();

  return (
    <Malowanie_template
      meta={
        <Meta
          title="FJ Malowanie Dachów"
          description="Profesjonalne kompleksowe usługi z zakresu mycia, czyszczenia, impregnacji i malowania dachów"
        />
      }
    >
      <section id="wrapper">
        <header>
          <div className="inner">
          
          <h1 className="text-2xl">Realizacja - {props.slug}</h1>
            <p>
              POZNAJ TECHNOLOGIĘ I PROCES MALOWANIA DACHÓW, Czyszczenia ORAZ
              IMPREGNACJI
            </p>
          </div>
        </header>

        <div className="wrapper no_bottom ">
          <div className="inner">
            <section>
              
              <br />
            </section>
          </div>
        </div>

        <div className="wrapper no_bottom no_top">
          <div className="inner">
            <section>
              <p>
                <span className="image left">
                  <img src="/assets/images/malowanie/dachy_1.jpg" alt="Profesjonalne malowanie natryskowe" />
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
                  <img src="/assets/images/malowanie/dachy_2.jpg" alt="Podłoże do malowania, przygotowanie" />
                </span>
                Długotrwała jakość i gwarancja jakości to nie tylko stosowanie
                profesjonalnych farb to przede wszystkim
                przygotowanie podłoża. Dlatego kładziemy duży nacisk na
                przygotowanie powierzchni w zależności od rodzaju pokrycia
                dachowego poprzez:
              </p>

              <br />

              <br />
             

              <div className="brake_list"> </div>
            </section>
          </div>
        </div>

        <div className="wrapper no_top no_bottom">

          <div className="inner">

            <h1 className="text-2xl">Przykładowe realizacje</h1>
            <br/><br/>

            <div className="container-grid" id="gallerGrid">


              {/* <div className="box span">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/01.jpg"  alt="Dom jednorodzinny"/>
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
              </div> */}

              <div className="box span">
                <div className="href"><a href="/realizacje/sala_gimnastyczna"></a> </div>
                <div className="description">Sala gimnastyczna</div>
                <img src="/assets/images/realizacje/02.jpg" />
              </div>

              {/* <div className="box span">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/6.jpg" />
              </div>

              <div className="box  ">
                <div className="href"><a href="/oferta/realizacje"></a> </div>
                <div className="description">Dom jednorodzinny</div>
                <img src="/assets/images/realizacje/1.jpg" />
              </div> */}

             
            





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
              Doświadczenie zdobyliśmy malując dachy na inwestycjach komercyjnych i obiektach użyteczności publicznej.
                Z powodzeniem zajmujemy się także domami jednorodzinnymi.
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




export const getStaticProps = async (context: { params: { slug: never[]; }; }) => {
  const slug = context.params.slug || [];

  //const pagea = await getPortfolioBySlug(slug);
  //const page = pagea[0];

  


//   if(page.content){ 
    
   
// }

  return {
    props: { slug },
  };
};
export const getStaticPaths = async () => {
  //const slugs = await getPortfolioSlugs();
  //const slugsList = slugs.map((el) => {
  //  return { params: { slug: el.slug.toString() } };
 // });
  return {
    paths: [],
    fallback: "blocking",
  };
};