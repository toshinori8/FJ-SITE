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
            <LogoFJ />
          </div>
          <h1 className="h1_oweride">Malowanie dachów</h1>
          <p>Zupełnie nowy wygląd oraz trwałość na wiele lat</p>
        </div>
        </FadeIn>
      </section>
    </>
  );
}

export default Banner;
