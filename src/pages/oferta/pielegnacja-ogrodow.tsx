import { useRouter } from 'next/router';

import { Meta } from '@/layout/Elements/Meta';
import { Pielegnacja } from '@/templates/Pielegnacja';
import RealizacjeIndex from '@/layout/Realizacje/RealizacjeIndex';
import FuturesHome from '@/layout/Elements/FuturesHome';
import Footer from '@/layout/Elements/Footer';


const Malowanie = () => {
  const router = useRouter();

  return (
    <Pielegnacja
      meta={
        <Meta
          title="Pielęgnacja ogrodów"
          description="Opis strony "
        />
      }
    >


      <FuturesHome />
      <Footer />
    </Pielegnacja>
  );
};

export default Malowanie;
