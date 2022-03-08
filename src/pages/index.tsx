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
          title="FJ Profesjonalne malowanie dachów"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >


      <FuturesHome />

      <RealizacjeIndex />
    </Main>
  );
};

export default Index;
