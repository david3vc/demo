import {NavLink} from 'react-router-dom';

import {Row, Col, Card, Button, Form, Table} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const UserIndex = ()=> {

    return (
        <>
            <Row className='page-titles'>
                <Col className='col-auto align-self-center'>
                    <ol className="breadcrumb py-1">
                        <li className="breadcrumb-item text-nowrap">Administración</li>
                        <li className="breadcrumb-item text-nowrap">Sistema</li>
                        <li className="breadcrumb-item text-nowrap fw-bold active">Usuarios</li>
                    </ol>
                </Col>
                <Col>
                    <div className="d-flex justify-content-end align-items-center">
                        <NavLink to='/usuarios/registro' className="btn btn-sm btn-success">
                            <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                            <span className="d-none d-sm-inline-block">Nuevo</span>
                        </NavLink>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className='mb-2'>
                        <Card.Header className='d-flex align-items-center justify-content-between'>
                            <label className="mb-0 fw-bold text-dark">Busqueda</label>
                            <div>
                                <Button variant='outline-primary' size='sm'>
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> {' '}
                                    <span className="d-none d-sm-inline-block">Buscar</span>
                                </Button> {' '}
                                <Button variant='outline-secondary' size='sm'>
                                    <FontAwesomeIcon icon="fa-solid fa-broom" /> {' '}
                                    <span className="d-none d-sm-inline-block">Limpiar</span>
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row className='g-3'>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Codigo
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Nombres
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Apellidos
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Usuario
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Perfil
                                        </Form.Label>
                                        <Form.Select size="sm">
                                            <option>-Seleccione-</option>
                                            <option value="1">Gerencia de Asuntos jurídicos</option>
                                            <option value="2">Gerente</option>
                                            <option value="3">Encargado</option>
                                            <option value="4">Visualización</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            &nbsp;
                                        </Form.Label>
                                        <Form.Check type="checkbox" label="Incluir registro inactivos" />
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <label className="mb-0 fw-bold text-dark">
                                Listado de usuarios
                            </label>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Usuario</th>
                                        <th>Perfil</th>
                                        <th className='text-center'>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>m.otto@icl.gob.pe</td>
                                        <td>Gerente</td>
                                        <td className='text-center'>
                                            <Button variant="outline-primary" size='sm' className='border-0' title='Editar'>
                                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                            </Button>{' '}
                                            <Button variant="outline-danger" size='sm' className='border-0' title='Eliminar'>
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>j.thornton@icl.gob.pe</td>
                                        <td>Encargado</td>
                                        <td className='text-center'>
                                            <Button variant="outline-primary" size='sm' className='border-0' title='Editar'>
                                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                            </Button>{' '}
                                            <Button variant="outline-danger" size='sm' className='border-0' title='Eliminar'>
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jacob</td>
                                        <td>Otto</td>
                                        <td>j.otto@icl.gob.pe</td>
                                        <td>Visualización</td>
                                        <td className='text-center'>
                                            <Button variant="outline-primary" size='sm' className='border-0' title='Editar'>
                                                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                            </Button>{' '}
                                            <Button variant="outline-danger" size='sm' className='border-0' title='Eliminar'>
                                                <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>                
                </Col>
            </Row>
        </>
    )
}

export default UserIndex;