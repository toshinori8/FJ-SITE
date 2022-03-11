import { useForm,SubmitHandler } from "react-hook-form";
// import { Alert } from "react";
// import { Alert } from 'components';
import { Alert } from 'react-bootstrap';
import axios from "axios";

const KontaktForm = () => {
  
  type Inputs = {
    name: string,
    email: string,
    message: string
  };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
      
      console.log(data)

      axios.get('https://malowanie-dachow-fj.pl/mail.php', {
        params: {
          name: data.name,
        message: data.message,
        email: data.email
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
      // biuro@malowanie-dachow-fj.pl
    };


    

    return (
     
      



      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">Imie Nazwisko</label>
          <input type="text"  id="name" {...register("name", { required: true })} />
          { errors.name &&
        <Alert variant="danger">
          { errors.name?.type === "required" && <p>Imię i nazwosko wymagane</p> }
          { errors.name?.type === "minLength" && <p>Min length of title is 5 characters!</p> }

        </Alert>
      }
        
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email"  id="email" {...register("email", { required: true })} />
        </div>
        <div className="field">
          <label htmlFor="message">Wiadomość</label>
          <textarea  id="message"  {...register("message", { required: true })}></textarea>
        </div>
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Wyślij" />
        </li>
      </ul>



      
      
    </form>
  



   
    
   
    )


  

  
}

export default KontaktForm