import {BrowserRouter } from 'react-router-dom';

import RouterView from '../router/RouterView';
import logo from '../template/images/logo.png';

const Auth = () => {
  return (
    <section id="wrapper" className="login-register">
        <article className="ui-auth-about-sistem">
            <div className="card">
                <div className="card-body">
                    <h1 className="text-primary fw-bold">SGITTD <span className="text-version"> v1.0</span></h1>
                    <p className="text-primary fw-bold mb-2">Sistema de gestión territorial y tramite documentario</p>
                </div>
            </div>
        </article>
        <article className="ui-auth-form-container">
            <div className="card border-0 w-100">
                <div className="card-body">
                    <div className="text-center mt-2 mb-5">
                        <a href="#">
                            <img src={logo} alt="Home" className="img-fluid" />
                        </a>
                    </div>
                    
                    <BrowserRouter>
                        <RouterView />
                    </BrowserRouter>

                </div>
            </div>
        </article>
    </section>
  )
};

export default Auth;
