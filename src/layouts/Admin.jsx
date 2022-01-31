import {BrowserRouter } from 'react-router-dom';
import RouterView from '../router/RouterView';

import HeaderPage from './partials/HeaderPage';
import LeftSidebar from './partials/LeftSidebar';
import FooterPage from './partials/FooterPage';

const Admin = ()=> {

    return (
        <section id="main-wrapper">
            <BrowserRouter>
                <HeaderPage />

                    <LeftSidebar />

                    <div className="page-wrapper">
                        <div className="container-fluid">

                            <RouterView />

                        </div>
                    </div>

                <FooterPage />
            </BrowserRouter>
        </section>
    )
}

export default Admin;