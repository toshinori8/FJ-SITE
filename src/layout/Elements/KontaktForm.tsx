import { useForm, SubmitHandler } from "react-hook-form";
// import { Alert } from "react";
// import { Alert } from 'components';
import { Alert } from 'react-bootstrap';
import axios from "axios";
import LogoFJ from "./LogoFJ";
import HamMenu from "./menu/HamMenu";
import FadeIn from "./FadeIn";


let message = "";

let sending = false;
const KontaktForm = () => {

  type Inputs = {
    name: string,
    email: string,
    message: string
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {

    //console.log(data)
    // const overF= document.getElementsByClassName('overflow');

    sending = true;

    document.body.classList.toggle('overflow');




    axios.get('https://malowanie-dachow-fj.pl/mail.php', {
      params: {
        name: data.name,
        message: data.message,
        email: data.email
      },
      responseType: 'json'
    })
      .then(function (response) {
        // console.log(response.data);
        //   if(response.data)

        const status = response.status
        console.log(status);
        if (status === 200) {
          message = "Wiadomość wysłana";
        }


      })
      .catch(function (error) {
        // console.log(error);
      })
      .then(function (response) {
        // always executed
        message = "Wysyłanie wiadomości";

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
            <input type="email" id="email" {...register("email", { required: true })} />
            {errors.email &&
              <Alert variant="danger">
                {errors.email?.type === "required" && <p>Wprowadz adres email</p>}
                {errors.email?.type === "pattern" && <p>Błędny adres email</p>}

              </Alert>
            }
          </div>
          <div className="field">
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message"  {...register("message", { required: true, minLength: 10, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}></textarea>


            {errors.message &&
              <Alert variant="danger">
                {errors.message?.type === "required" && <p>Wprowadź wiadomość</p>}
                {errors.message?.type === "minLength" && <p>Wprowadź wiadomość</p>}
                
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
            <div className='message'>{message}</div>
          </FadeIn>
        </div>

      </form>







    </>


  )





}

export default KontaktForm