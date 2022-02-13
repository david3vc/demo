import {NavLink} from 'react-router-dom';

import {Row, Col, Card, Button, Form, Table} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Breadcrumb from '../../components/Breadcrumb';

const ObservacionesIndex = ()=> {

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Items>
                    <Breadcrumb.Item>
                        Tablas del sistema
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="active">
                        Observaciones
                    </Breadcrumb.Item>
                </Breadcrumb.Items>
                
                <Breadcrumb.Actions>
                    <NavLink to='' className="btn btn-sm btn-success" >
                        <span className="d-none d-sm-inline-block">Derivar solicitud</span>
                    </NavLink>
                    <NavLink to='/observaciones/registro' className="btn btn-sm btn-success">
                        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                        <span className="d-none d-sm-inline-block">Nuevo registro</span>
                    </NavLink>
                </Breadcrumb.Actions>
            </Breadcrumb>

            <Row>
                <Col>
                    <Card className='mb-2'>
                        <Card.Header className='d-flex align-items-center justify-content-between'>
                            <label className="mb-0 fw-bold text-dark">Búsqueda</label>
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
                                            Descripcion
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
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
                                Listado de resultados
                            </label>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Código</th>
                                        <th>Descripción</th>
                                        <th className='text-center'>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>CC01</td>
                                        <td>lorem ipsum dolor sit amet consectetur adipiscing elit</td>
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
                                        <td>CC02</td>
                                        <td>lorem ipsum dolor sit amet consectetur adipiscing elit</td>
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
                                        <td>CC03</td>
                                        <td>lorem ipsum dolor sit amet consectetur adipiscing elit</td>
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

export default ObservacionesIndex;