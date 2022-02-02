import {NavLink} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Login = () => {
  return (
    <form action="#" className="form-material d-grid gap-5">

        <input type="email" className="form-control" name="email"  placeholder="Correo electrónico" autoComplete="email"
            required autoFocus />

        <input id="password" type="password" className="form-control" name="password" autoComplete="current-password"
            placeholder="Contraseña" required />

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="rememberme" />
            <label className="form-check-label" form="rememberme">
                Recuerdame
            </label>
        </div>

        <button className="btn btn-primary btn-lg rounded-pill" type="button">
            Acceder
        </button>

        <NavLink to="/sendresetlink"className="text-center">
            <FontAwesomeIcon icon="fa-solid fa-lock" className='me-1' />
            ¿Olvidaste tu contraseña?
        </NavLink>     
    </form>
  );
};

export default Login;
