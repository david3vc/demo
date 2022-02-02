import {NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PasswordReset = () => {
  return (
    <form action="#" className="form-material d-grid gap-5">

        <input type="email" className="form-control" name="email" autoComplete="email" placeholder="Correo electrónico"
            required autoFocus />

        <input id="password" type="password" className="form-control" name="password"
            placeholder="Nueva contraseña" required />

        <input id="password_confirmation" type="password" className="form-control" name="password_confirmation" 
            placeholder="Confirmar contraseña" required />

        <button className="btn btn-primary btn-lg rounded-pill" type="button">
            Restablecer la contraseña
        </button>
        
        <NavLink to="/login"className="text-center">
            <FontAwesomeIcon icon="fa-solid fa-user" className='me-1' />
            ¿Ya tienes una cuenta?
        </NavLink>
    </form>
  );
};

export default PasswordReset;
