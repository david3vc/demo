import {Outlet, NavLink} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const LeftSidebar = ()=> {


    return (
        <aside className="left-sidebar">
            
            <div className="scroll-sidebar">
                
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-map" className='me-1 pt-1' />
                                    <span className="hide-menu">Mapa</span>
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li><a href="#">Form Layouts</a></li>
                                <li><a href="#">Form Addons</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-sliders"  className='me-1 pt-1' />
                                    <span className="hide-menu">Mis procedimientos 
                                        <span className="badge rounded-pill bg-info ms-auto">4</span>
                                    </span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Analytical</a></li>
                                <li><a href="#">Demographical</a></li>
                                <li><a href="#">Modern</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-diagram-project" className='me-1 pt-1' />
                                    <span className="hide-menu">Procesos técnicos catastrales</span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Calendar</a></li>
                                <li><a href="#">Chat app</a></li>
                                <li><a href="#">Support Ticket</a></li>
                                <li><a href="#">Contact / Employee</a></li>
                                <li><a href="#">Contact Grid</a></li>
                                <li><a href="#">Contact Detail</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-signs-post" className='me-1 pt-1' />
                                    <span className="hide-menu">Zonificación y parámetros urbanísticos</span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Mailbox</a></li>
                                <li><a href="#">Mailbox Detail</a></li>
                                <li><a href="#">Compose Mail</a></li>
                            </ul>
                        </li>                        
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-road" className='me-1 pt-1'/>
                                    <span className="hide-menu">Vías</span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Mailbox</a></li>
                                <li><a href="#">Mailbox Detail</a></li>
                                <li><a href="#">Compose Mail</a></li>
                            </ul>
                        </li>                        
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-gavel" className='me-1 pt-1'/>
                                    <span className="hide-menu">Jurisdicción</span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Mailbox</a></li>
                                <li><a href="#">Mailbox Detail</a></li>
                                <li><a href="#">Compose Mail</a></li>
                            </ul>
                        </li>                        
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-city" className='me-1 pt-1'/>
                                    <span className="hide-menu">Habilitaciones urbanas</span>                                    
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Mailbox</a></li>
                                <li><a href="#">Mailbox Detail</a></li>
                                <li><a href="#">Compose Mail</a></li>
                            </ul>
                        </li>                        
                        <li>
                            <a className="has-arrow" href="#"
                                aria-expanded="false">
                                <span className='nav-item-content'>
                                    <FontAwesomeIcon icon="fa-solid fa-gear" className='me-1 pt-1' />
                                    <span className="hide-menu">Administración</span>
                                </span>
                            </a>
                            <ul aria-expanded="false" className="collapse">
                                <li><a href="#">Compendio de normas</a></li>
                                <li> 
                                    <a className="has-arrow" href="#" aria-expanded="false">Sistema</a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li>
                                            <NavLink to='/usuarios'>Usuarios</NavLink>
                                        </li>
                                        <li>
                                            <a href="#">Perfiles</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Otros</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
            </div>
            
        </aside>
    )

}

export default LeftSidebar;
