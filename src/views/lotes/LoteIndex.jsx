import { useState } from 'react';
import {NavLink} from 'react-router-dom';

import {Row, Col, Card, Button, Form, Table, Modal} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Breadcrumb from '../../components/Breadcrumb';

const LoteIndex = ()=> {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Items>
                    <Breadcrumb.Item>
                        Tablas del sistema
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="active">
                        Lotes
                    </Breadcrumb.Item>
                </Breadcrumb.Items>
                
                <Breadcrumb.Actions>
                    <NavLink to='' className="btn btn-sm btn-success" onClick={handleShow} >
                        <span className="d-none d-sm-inline-block">Derivar solicitud</span>
                    </NavLink>
                    <NavLink to='/lotes/registro' className="btn btn-sm btn-success">
                        <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                        <span className="d-none d-sm-inline-block">Nuevo registro</span>
                    </NavLink>
                </Breadcrumb.Actions>
            </Breadcrumb>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Derivar Solicitud</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Solicitud
                            </Form.Label>
                            <Form.Control size="sm" type='text' />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                De
                            </Form.Label>
                            <Form.Select size="sm">
                                <option>-Seleccione-</option>
                                <option value="1">Dni</option>
                                <option value="2">Ruc</option>
                                <option value="3">Otro</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Para
                            </Form.Label>
                            <Form.Select size="sm">
                                <option>-Seleccione-</option>
                                <option value="1">Dni</option>
                                <option value="2">Ruc</option>
                                <option value="3">Otro</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Resultado
                            </Form.Label>
                            <Form.Select size="sm">
                                <option>-Seleccione-</option>
                                <option value="1">Dni</option>
                                <option value="2">Ruc</option>
                                <option value="3">Otro</option>
                            </Form.Select>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Fecha de envío
                            </Form.Label>
                            <Form.Control size="sm" type='date' />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Folios
                            </Form.Label>
                            <Form.Control size="sm" type='text' />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} >
                            <Form.Label>
                                Observaciones
                            </Form.Label>
                            <Form.Control size="sm" type='text' />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>

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
                                            Código catastral
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Código referencial
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Año
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Lote
                                        </Form.Label>
                                        <Form.Control size="sm" type='text' />
                                    </Col>
                                    <Col xs={12} sm={6} md={4} lg={3} >
                                        <Form.Label>
                                            Manzana
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
                                            Sector
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
                                            Zonificación
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
                                            Distrito
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
                                Listado de lotes
                            </label>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Código Catastral</th>
                                        <th>CUC</th>
                                        <th>Año</th>
                                        <th>Distrito</th>
                                        <th>Sector</th>
                                        <th>Manzana</th>
                                        <th>Lote</th>
                                        <th>Zonificación</th>
                                        <th className='text-center'>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>CC01</td>
                                        <td>C001</td>
                                        <td>2020</td>
                                        <td>Miraflores</td>
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
                                        <td>CC02</td>
                                        <td>C002</td>
                                        <td>2020</td>
                                        <td>Miraflores</td>
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
                                        <td>CC03</td>
                                        <td>C003</td>
                                        <td>2020</td>
                                        <td>Miraflores</td>
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

export default LoteIndex;