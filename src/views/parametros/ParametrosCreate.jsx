import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Form, Row, Tab, Tabs, Table } from "react-bootstrap";
import Breadcrumb from "../../components/Breadcrumb";


const ParametrosCreate = () => {

  return (
        <>
            <Breadcrumb>
                <Breadcrumb.Items>
                    <Breadcrumb.Item>
                        Tablas del sistema
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/parametros">
                        Parametros
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
                    <NavLink to='/parametros' className="btn btn-sm btn-dark">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </NavLink>
                </Breadcrumb.Actions>
            </Breadcrumb>

            <Row>
                <Col>
                    <Tabs id="mantenedor-usuario" defaultActiveKey="detalleParametros" className="nav-tabs-flat">
                        <Tab eventKey='detalleParametros' title='Detalle'>
                            <Card>
                                <Card.Body>
                                    <Row className='g-3'>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Tabla <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Código <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Decripción
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Abreviatura
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                &nbsp;
                                            </Form.Label>
                                            <Form.Check type="checkbox" label="Registro activo" />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                    
                </Col>
            </Row>
        </>
  );
};

export default ParametrosCreate;