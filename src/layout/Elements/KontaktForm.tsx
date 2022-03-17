import { useForm, SubmitHandler } from "react-hook-form";
// import { Alert } from "react";
// import { Alert } from 'components';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import LogoFJ from "./LogoFJ";
import HamMenu from "./menu/HamMenu";
import FadeIn from "./FadeIn";

function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


let messageAllert = "";
let sending = false;
const KontaktForm = () => {

  type Inputs = {
    name: string,
    email: string,
    message: string
    rodo: boolean;
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {

    console.log(data)
    // const overF= document.getElementsByClassName('overflow');

    sending = true;

    document.body.classList.toggle('overflow');
    messageAllert = "Wysyłanie wiadomości";

    console.log("Sending message");
    sleep(2000).then(() => { 

      axios.get('https://malowanie-dachow-fj.pl/mail.php', {
        params: {
          name: data.name,
          message: data.message,
          email: data.email
        },
        responseType: 'json'
      })
        .then(function (response) {
  
          //   if(response.data)
  
         
          if (response.status === 200) {
                  console.log(response.data);


          }
  
  
        })
        .catch(function (error) {
          // console.log(error);

        })
        .then(function (response) {
          // always executed
          let mesO=document.querySelector('.messageAllert');

          messageAllert = "Wiadomość wysłana";
        if(mesO) mesO.innerHTML = messageAllert

        });



     });
    


 
    // biuro@malowanie-dachow-fj.pl
  };




  return (


    <>


      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Imie Nazwisko</label>
            <input type="text" id="name" {...register("name", { required: true, minLength: 4 })} />
            {errors.name &&
              <Alert variant="danger">
                {errors.name?.type === "required" && <p>Imię i nazwosko wymagane</p>}
                {errors.name?.type === "minLength" && <p>Zbyt krótkie</p>}

              </Alert>
            }

          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
            {errors.email &&
              <Alert variant="danger">
                {errors.email?.type === "required" && <p>Wprowadz adres email</p>}
                {errors.email?.type === "pattern" && <p>Błędny adres email</p>}

              </Alert>
            }
          </div>
          <div className="field">
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message"  {...register("message", { required: true, minLength: 10})}></textarea>


            {errors.message &&
              <Alert variant="danger">
                {errors.message?.type === "required" && <p>Wprowadź wiadomość</p>}
                {errors.message?.type === "minLength" && <p>Wprowadź wiadomość</p>}
                
              </Alert>
            }
          </div>
          <div className="field">

{/*               
            <label htmlFor="rodo">Wyrazam zgodę na gromadznie przez </label>
 */}

            <input  type="checkbox" {...register('rodo')} id="rodo" className={`form-check-input ${errors.rodo ? 'is-invalid' : ''}`} />
                        <label htmlFor="rodo" id="rodo-label" className="form-check-label">Wyrażam zgodę na przetwarzanie moich danych osobowych wyłącznie w celu nawiązania kontaktu przez firmę FJ Łukasz Jeleń.</label>
                        <div className="invalid-feedback">{errors.rodo?.message}</div>
                    

            

            {errors.rodo &&
              <Alert variant="danger">
                {errors.rodo?.type === "required" && <p>Wymagane by przesłać wiadomość</p>}
                
              </Alert>
            }

          </div>

        </div>
        <ul className="actions">
          <li>
            <input type="submit" value="Wyślij" />
          </li>
        </ul>



        {/* {sending==true && } */}

        <div className='overflow'>
          <HamMenu csState={"open"} />

          <div className='logo'><LogoFJ /></div>
          <FadeIn>
            <div className='messageAllert'>{messageAllert}</div>
          </FadeIn>
        </div>

      </form>







    </>


  )





}

export default KontaktForm