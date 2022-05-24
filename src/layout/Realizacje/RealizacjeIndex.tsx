import { useRouter } from 'next/router';
import { Article_R } from './Article_R';

// import {Article_R} from './Article_R';



function RealizacjeIndex() {
  const router = useRouter();

  return(

    <section id="four" className="wrapper alt style1">
    <div className="inner">
      <h2 className="major">Nasze Realizacje</h2>
      {/* <p>Przedstawiamy nasze realizacje.</p> */}
      <section className="features">
      {/* <article> 
        <Article_R 
        
        image={'/assets/images/realizacje/1.jpg'}
        title={'Title dynamic'}  
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id ulla dignissim dapibus ultrices.'}
        href={"#"}
        
        />
      </article> */}

      
       <article>
        <Article_R 
        
        image={'/assets/images/realizacje/02.jpg'}
        title={'Sala gimnastyczna'} 
        alt={'Malowanie agregatem, sala gimnastyczna'}   
        content={'Malowanie sufitu sali gimnastycznej, renowacja parkietu i sprzetu sportowego'}
        href={"/realizacje/Sala_gimnastyczna"}
        
        />
        </article>

        
       
      </section>
      <ul className="actions">
        <li>
          <a href="#" className="button">
            Przeglądaj wszystkie
          </a>
        </li>
      </ul>
    </div>
  </section>

  )



}



export default RealizacjeIndex