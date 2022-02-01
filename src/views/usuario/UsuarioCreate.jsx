import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Form, Row, Tab, Tabs } from "react-bootstrap";


const UsuarioCreate = () => {
  return (
        <>
            <Row className='page-titles'>
                <Col className='col-auto align-self-center'>
                    <ol className="breadcrumb py-1">
                        <li className="breadcrumb-item text-nowrap"><a href="#">Administración</a></li>
                        <li className="breadcrumb-item text-nowrap"><a href="#">Sistema</a></li>
                        <li className="breadcrumb-item text-nowrap "><a href="#">Usuarios</a></li>
                        <li className="breadcrumb-item text-nowrap active">Registro</li>
                    </ol>
                </Col>
                <Col>
                    <div className="d-flex justify-content-end align-items-center">                        
                        <Button variant='primary' size='sm'>
                            <FontAwesomeIcon icon="fa-solid fa-floppy-disk" /> {' '}
                            <span className="d-none d-sm-inline-block">Guardar</span>
                        </Button>
                            <FontAwesomeIcon icon="fa-solid fa-grip-lines-vertical" className="mx-3" />
                        <Button variant='dark' size='sm'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs id="mantenedor-usuario" defaultActiveKey="datosPrincipales" className="nav-tabs-flat">
                        <Tab eventKey='datosPrincipales' title='Datos principales'>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Row className='g-3'>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Usuario <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Contraseña <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='password' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Confirmar contraseña <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='password' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                &nbsp;
                                            </Form.Label>
                                            <Form.Check type="checkbox" label="Inactivar usuario" />
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        </Tab>
                        <Tab eventKey='datosGenerales' title='Datos generales'>
                            <Card>
                                <Card.Body>
                                    <Row className='g-3'>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Nombres <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Apellido paterno <span className="text-danger fw-bold">(*)</span>
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Apellido materno
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Correo electrónico
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                N° Teléfono
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                        <Col xs={12} sm={6} md={4} lg={3} >
                                            <Form.Label>
                                                Tipo documento
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
                                                N° Documento
                                            </Form.Label>
                                            <Form.Control size="sm" type='text' />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey='perfil' title='Perfil'>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row>
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

export default UsuarioCreate;
