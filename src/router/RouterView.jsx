import {
    Routes,
    Route
} from 'react-router-dom';
import {PrivateOutlet, PublicOutlet} from './CheckPageNavigation';

//Publicas
import Login from '../views/auth/Login';
import PasswordReset from '../views/auth/PasswordReset';
import SendResetLink from '../views/auth/SendResetLink';

//Privadas
import HomeIndex from '../views/home/HomeIndex';
import UsuarioIndex from '../views/usuario/UsuarioIndex';
import UsuarioCreate from '../views/usuario/UsuarioCreate';
import LoteIndex from '../views/lotes/LoteIndex';
import LoteCreate from '../views/lotes/LoteCreate';
import ParametrosIndex from '../views/parametros/ParametrosIndex';
import ParametrosCreate from '../views/parametros/ParametrosCreate';
import ObservacionesIndex from '../views/observaciones/ObservacionesIndex';
import ObservacionesCreate from '../views/observaciones/ObservacionesCreate';

const RouterView = ()=> {

    return (
        <Routes>

            <Route path="/login" element={<PublicOutlet />}>
                <Route path="" element={<Login />}  />
            </Route>
            <Route path="/sendresetlink" element={<PublicOutlet />}>
                <Route path="" element={<SendResetLink />}  />
            </Route>
            <Route path="/passwordreset" element={<PublicOutlet />}>
                <Route path="" element={<PasswordReset />}  />
            </Route>

            <Route path="/" element={<PrivateOutlet />}>
                <Route path="" element={<HomeIndex />}  />
            </Route>
            <Route path="/usuarios" element={<PrivateOutlet />}>
                <Route path='' element={<UsuarioIndex />}/>
            </Route>
            <Route path="/usuarios/registro" element={<PrivateOutlet />}>
                <Route path='' element={<UsuarioCreate />}/>
            </Route>
            <Route path="/lotes" element={<PrivateOutlet />}>
                <Route path='' element={<LoteIndex />}/>
            </Route>
            <Route path="/lotes/registro" element={<PrivateOutlet />}>
                <Route path='' element={<LoteCreate />}/>
            </Route>
            <Route path="/parametros" element={<PrivateOutlet />}>
                <Route path='' element={<ParametrosIndex />}/>
            </Route>
            <Route path="/parametros/registro" element={<PrivateOutlet />}>
                <Route path='' element={<ParametrosCreate />}/>
            </Route>
            <Route path="/observaciones" element={<PrivateOutlet />}>
                <Route path='' element={<ObservacionesIndex />}/>
            </Route>
            <Route path="/observaciones/registro" element={<PrivateOutlet />}>
                <Route path='' element={<ObservacionesCreate />}/>
            </Route>
            
        </Routes>
    )
}

export default RouterView;