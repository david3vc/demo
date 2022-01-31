const UserIndex = ()=> {

    return (
        <>
            <div className="row page-titles">
                <div className="col-auto align-self-center">
                    <ol className="breadcrumb justify-content-end py-1">
                        <li className="breadcrumb-item text-nowrap"><a href="#">User</a></li>
                        <li className="breadcrumb-item text-nowrap active">List</li>
                    </ol>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end align-items-center text-end">
                        <button type='button' className="btn btn-sm btn-success">
                            <i className="fa fa-plus-circle"></i>
                            <span className="d-none d-sm-inline-block ms-1">Nuevo</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">

                    <div className="card mb-3">
                        <div className="card-header d-flex align-items-center justify-content-between">
                            <label className="mb-0 fw-bold">Busqueda</label>
                            <div>
                                <button type="button" className="btn btn-sm btn-outline-primary me-1">
                                    <i className="fas fa-search"></i>
                                    Buscar
                                </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                    <i className="fas fa-broom"></i>
                                    Limpiar
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <label className="form-label">Handle</label>
                                    <input type="text" className="form-control" placeholder="Handle" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                            </div>

                            <hr />

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>#</th>
                                            <th>First</th>
                                            <th>Last</th>
                                            <th>Handle</th>
                                            <th>Address</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="text-nowrap">
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-info border-0">
                                                        <i className="fas fa-eye fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-success border-0">
                                                        <i className="fas fa-pencil-alt fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-danger border-0">
                                                        <i className="fas fa-trash-alt fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            <td>Lorem, ipsum.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-nowrap">
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-info border-0">
                                                        <i className="fas fa-eye fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-success border-0">
                                                        <i className="fas fa-pencil-alt fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-danger border-0">
                                                        <i className="fas fa-trash-alt fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae?</td>
                                            <td>Lorem ipsum dolor sit.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-nowrap">
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-info border-0">
                                                        <i className="fas fa-eye fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-success border-0">
                                                        <i className="fas fa-pencil-alt fa-lg"></i>
                                                    </button>
                                                    <button type="button"
                                                        className="btn btn-sm btn-outline-danger border-0">
                                                        <i className="fas fa-trash-alt fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td>3</td>
                                            <td>Mark</td>
                                            <td>Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                                                itaque.</td>
                                            <td>Lorem, ipsum dolor.</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserIndex;