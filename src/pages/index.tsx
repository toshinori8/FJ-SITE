import { useRouter } from 'next/router';

import { Meta } from '@/layout/Elements/Meta';
import { Main } from '@/templates/Main';
import RealizacjeIndex from '@/layout/Realizacje/RealizacjeIndex';
import FuturesHome from '@/layout/Elements/FuturesHome';


const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="FJ Malowanie Dachów"
          description="Profesjonalne kompleksowe usługi z zakresu mycia, czyszczenia, impregnacji i malowania dachów"
        />
      }
    >


      <FuturesHome />

      <RealizacjeIndex />
    </Main>
  );
};

export default Index;
