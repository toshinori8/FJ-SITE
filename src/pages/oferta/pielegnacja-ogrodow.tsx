import { useRouter } from 'next/router';

import { Meta } from '@/layout/Elements/Meta';
import { Pielegnacja_template } from '@/templates/Pielegnacja_template';
import RealizacjeIndex from '@/layout/Realizacje/RealizacjeIndex';
import FuturesHome from '@/layout/Elements/FuturesHome';
import Footer from '@/layout/Elements/Footer';


const Malowanie = () => {
  const router = useRouter();

  return (
    <Pielegnacja_template
      meta={
        <Meta
          title="Pielęgnacja ogrodów"
          description="Opis strony "
        />
      }
    >


   
      <Footer />
    </Pielegnacja_template>
  );
};

export default Malowanie;
