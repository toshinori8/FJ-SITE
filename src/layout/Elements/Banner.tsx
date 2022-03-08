import Link from 'next/link';
import LogoFJ from '@/layout/Elements/LogoFJ';
import Slider from '@/layout/Elements/Slider';


function Banner() {
  return (
    <>
      <section id="banner">
        <Slider />

        <div className="inner">
          <div className="w-1/4 logo">
            
              {/* <img
                alt="FJ Malowanie dachów"
                src={`${router.basePath}/assets/images/fjLogo.svg`}
              />
               */}
              <LogoFJ />
           
          </div>
          <h2>Malowanie dachów</h2>
          <p></p>
        </div>
      </section>
    </>
  );
}

export default Banner;
