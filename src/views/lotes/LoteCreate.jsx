import {useRef} from 'react';
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Form, Row, Tab, Tabs, Table } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";


const LoteCreate = () => {

    const selectDistrito = useRef();
    const inputValueDistrito = useRef();
    const selectSector = useRef();
    const inputValueSector = useRef();

    const ddlselectDistrito = () => {
        inputValueDistrito.current.value = selectDistrito.current.value;
    }
    const ddlselectSector = () => {
        inputValueSector.current.value = selectSector.current.value;
    }

  return (
        <>
            <Breadcrumb>
                <Breadcrumb.Items>
                    <Breadcrumb.Item>
                        Tablas del sistema
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/lotes">
                        Lotes
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="active">
                        Registro
                    </Breadcrumb.Item>
                </Breadcrumb.Items>
                <Breadcrumb.Actions>
                    <Button variant='primary' size='sm'>
                        <FontAwesomeIcon icon="fa-solid fa-floppy-disk" /> {' '}
                        <span className="d-none d-sm-inline-block">Guardar</span>
                    </Button>
                    <FontAwesomeIcon icon="fa-solid fa-grip-lines-vertical" className="mx-3" />
                    <NavLink to='/lotes' className="btn btn-sm btn-dark">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </NavLink>
                </Breadcrumb.Actions>
            </Breadcrumb>
            <Row>
                <Col>
                    <Tabs id="mantenedor-usuario" defaultActiveKey="datosGenerales" className="nav-tabs-flat">
                        <Tab eventKey='datosGenerales' title='Datos generales'>
                            <Card>
                                <Card.Body>
                                    <Row className='g-3'>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Código Catastral <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                CUC <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Row>
                                                <Form.Label>
                                                    Distrito
                                                </Form.Label>
                                            </Row>
                                            <Row>
                                                <Col lg={4}>
                                                    <Form.Control size="sm" type='text' ref={inputValueDistrito} />
                                                </Col>
                                                <Col>
                                                    <Form.Select size="sm" ref={selectDistrito} onChange={ddlselectDistrito} >
                                                        <option value="">-Seleccione-</option>
                                                        <option value="150101">Lima</option>
                                                        <option value="150102">Ancón</option>
                                                        <option value="150103">Ate</option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Row>
                                                <Form.Label>
                                                Sector
                                                </Form.Label>
                                            </Row>
                                            <Row>
                                                <Col lg={3}>
                                                    <Form.Control size="sm" type='text' ref={inputValueSector} />
                                                </Col>
                                                <Col>
                                                    <Form.Select size="sm" ref={selectSector} onChange={ddlselectSector} >
                                                        <option value="">-Seleccione-</option>
                                                        <option value="1">Dni</option>
                                                        <option value="2">Ruc</option>
                                                        <option value="3">Otro</option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>
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
                                                <option value="1">Dni</option>
                                                <option value="2">Ruc</option>
                                                <option value="3">Otro</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Cat. Terre.
                                            </Form.Label>
                                            <Form.Select size="sm">
                                                <option>-Seleccione-</option>
                                                <option value="1">Dni</option>
                                                <option value="2">Ruc</option>
                                                <option value="3">Otro</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Zona Tratan
                                            </Form.Label>
                                            <Form.Select size="sm">
                                                <option>-Seleccione-</option>
                                                <option value="1">Dni</option>
                                                <option value="2">Ruc</option>
                                                <option value="3">Otro</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Zonificación a nivel de edificación
                                            </Form.Label>
                                            <Form.Select size="sm">
                                                <option>-Seleccione-</option>
                                                <option value="1">Dni</option>
                                                <option value="2">Ruc</option>
                                                <option value="3">Otro</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                A. Encuestada
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                A. Gráfica
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Estructura
                                            </Form.Label>
                                            <Form.Select size="sm">
                                                <option>-Seleccione-</option>
                                                <option value="1">Dni</option>
                                                <option value="2">Ruc</option>
                                                <option value="3">Otro</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Ex-Manzana
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Ex-Manzana
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                &nbsp;
                                            </Form.Label>
                                            <Form.Check type="checkbox" label="Registro activo" />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Observaciones
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='ubicacionDelLote' title='Ubicación del lote (Asociar en el mapa)'>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row>
                                            <Col xs={12} sm={6} md={4} lg={3} >
                                                <Form.Label>
                                                    Código Catastral <span className="text-danger fw-bold">(*)</span>
                                                </Form.Label>
                                                <Form.Control size="sm" type='text' />
                                            </Col>
                                            <Col xs={12} sm={6} md={4} lg={3} >
                                                <Form.Label>
                                                    Titular/Propietario
                                                </Form.Label>
                                                <Form.Control size="sm" type='text' />
                                            </Col>
                                            <Col xs={12} sm={6} md={4} lg={3} >
                                                <Button variant='outline-primary' size='sm'>
                                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> {' '}
                                                    <span className="d-none d-sm-inline-block">Buscar</span>
                                                </Button>
                                            </Col>
                                            <Table responsive striped bordered hover size="sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Código Catastral</th>
                                                        <th>Lote</th>
                                                        <th>Titular</th>
                                                        <th>Dirección</th>
                                                        <th className='text-center'>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>CC01</td>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Miraflores</td>
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
                                                        <td>1</td>
                                                        <td>CC01</td>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Miraflores</td>
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
                                                        <td>1</td>
                                                        <td>CC01</td>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Miraflores</td>
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
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                    
                </Col>
            </Row>
        </>
  );
};

export default LoteCreate;
