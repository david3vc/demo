import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const HomeIndex = ()=> {

    return (
        <>
            <div className="row page-titles">
                <div className="col-auto align-self-center">
                    <ol className="breadcrumb justify-content-end py-1">
                        <li className="breadcrumb-item text-nowrap"><a href="#">Home</a></li>
                        <li className="breadcrumb-item text-nowrap active">Blank Page</li>
                    </ol>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end align-items-center text-end">
                        <button type='button' className="btn btn-sm btn-success">
                            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                            <span className="d-none d-sm-inline-block ms-1">Nuevo</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-12'>
                    
                    <div className="card mb-3">
                        <div className='card-header'>
                            Card Title
                        </div>
                        <div className="card-body">
                            This is some text within a card block.
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}


export default HomeIndex;