import LogoFJ from '@/layout/Elements/LogoFJ';
import Slider from '@/layout/Elements/Slider';
import FadeIn from './FadeIn';

function Banner() {
  return (
    <>
      <section id="banner">
      <FadeIn> 
      
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
          <p>Zupełnie nowy wygląd oraz trwałość na wiele lat</p>
        </div>
        </FadeIn>
      </section>
    </>
  );
}

export default Banner;
