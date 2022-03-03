import Link from 'next/link';
import { useRouter } from 'next/router';

import Slider from '@/layout/Slider';

function Banner() {
  const router = useRouter();
  return (
    <>
      <section id="banner">
        <Slider />

        <div className="inner">
          <div className="w-1/4 logo">
            <Link href="">
              <img
                alt="FJ Malowanie dachów"
                src={`${router.basePath}/assets/images/fjLogo.svg`}
              />
            </Link>
          </div>
          <h2>Malowanie dachów</h2>
          <p></p>
        </div>
      </section>
    </>
  );
}

export default Banner;
