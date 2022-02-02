import {NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SendResetLink = () => {
  return (
      <>
        <p className="text-muted text-center mb-5 px-md-4">¡Ingrese su correo electrónico y le enviaremos las instrucciones! </p>
        <form action="#" className="form-material d-grid gap-5">

            <input type="email" className="form-control" name="email" autoComplete="email" placeholder="Correo electrónico"
                required autoFocus />


            <button className="btn btn-primary btn-lg rounded-pill" type="button">
                Enviar
            </button>

            <NavLink to="/login"className="text-center">
                <FontAwesomeIcon icon="fa-solid fa-user" className='me-1' />
                ¿Ya tienes una cuenta?
            </NavLink>
        </form>
      </>
  );
};

export default SendResetLink;
