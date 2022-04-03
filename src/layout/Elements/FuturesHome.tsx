import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import router from 'next/router';

type FuturesHomeProps = {
  enny: string;
};

const FuturesHome = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="oferta/malowanie-dachow" className="image">
          
            <img src='/assets/images/realizacje/1.jpg' alt="" />
          </a>

          <div className="content">
            <h2 className="major">Profesjnalne malowanie i renowacja dachów</h2>
            <p>
              Zajmujemy się kompleksową renowacją, impregnacją pokryć dachowych oraz elementów systemu kominowego
            </p>
            <a href="/oferta/malowanie-dachow" className="special">
              Poznaj szczegóły, zamów usługę
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
         

            <div className="contentvc">
            <h2 className="major">Pielęgnacja ogrodów</h2>
            <p>
            
            </p>
         
        



          <div id="slider_images_futures">
            <div id="figure">
              <img src='/assets/images/pielegnacja-ogrodow/6.jpg' alt="pielęgnacja ogrodów, usługi w wadowicach, sprzęt ogrodniczy"/>
              <img src='/assets/images/pielegnacja-ogrodow/2.jpg' alt="koszenie trawy, wadowice małopolska, skawina "/>
              <img src='/assets/images/pielegnacja-ogrodow/3.jpg' alt="Pielęgnacja trawników"/>
              <img src='/assets/images/pielegnacja-ogrodow/4.jpg' alt="Nawożenie drzew, krzewów, bylin"/>
              <img src='/assets/images/pielegnacja-ogrodow/6.jpg' alt="Wyznaczanie nasadzeń roślin"/>
            </div>
          </div>

          <a href="oferta/pielegnacja-ogrodow/" className="special">
              POZNAJ SZCZEGÓŁY
            </a>
        </div>

  </div> 


      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
         
          
        </div>
      </section>
    </>
  );
};

export default FuturesHome;
