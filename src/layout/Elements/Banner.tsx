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
          <p>Zupełnie nowy wygląd oraz trwałość na wiele lat w kilka dni</p>
        </div>
      </section>
    </>
  );
}

export default Banner;
