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
              Poznaj technologię i proces malowania dachówki, czyswzczenia oraz
              impregnacji
            </p>
          </div>
        </header>

        <div className="wrapper no_bottom" >
          <div className="inner">
            <section >
              
              <p>
                <span className="image left">
                  <img src="/assets/images/1.jpg" alt="" />
                </span>
                Morbi mattis mi consectetur tortor elementum, varius
                pellentesque velit convallis. Aenean tincidunt lectus auctor
                mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex

              </p>
          <div className="brake_list"> </div> 
               <p>
                <span className="image left">
                  <img src="/assets/images/2.jpg" alt="" />
                </span>
                Vestibulum ultrices risus velit, sit amet blandit massa auctor
                sit amet. Sed eu lectus sem. Phasellus in odio at ipsum
                porttitor mollis id vel diam. Praesent sit amet posuere risus,
                eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in,
                auctor porta quam. Proin nec dui cursus, posuere dui eget
                interdum. Fusce lectus magna, sagittis at facilisis vitae,
                pellentesque at etiam. Quisque posuere leo quis sem commodo, vel
                scelerisque nisi scelerisque. Suspendisse id quam vel tortor
                tincidunt suscipit. Nullam auctor orci eu dolor consectetur,
                interdum ullamcorper ante tincidunt. Mauris felis nec felis
                elementum varius. Nam sapien ante, varius in pulvinar vitae,
                rhonce nec fermentum nisl. Aenean erat diam,
                tempus aliquet erat. Etiam iaculis nulla ipsum, et pharetra
                libero rhoncus ut. Phasellus rutrum cursus velit, eget
                condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam
                ante, vulputate et imperdiet eget, fermentum non dolor. Ut
                eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus
                justo. Duis neque ligula, elementum ut enim vel, posuere finibus
                justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque
                hendrerit in ipsum id tellus facilisis fermentum. Proin mauris
                dui.
              </p>

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
