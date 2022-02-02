import {Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Items = ()=> null,
    Item = ()=> null,
    Actions = ()=> null;


const Breadcrumb = ({children = {}}) => {

    let items = null,
        litItem = [],
        actions = null;

    if (Array.isArray(children)) {
        items = children.find(el => el.type === Items);
        actions = children.find(el => el.type === Actions);
    } else {
        items = children.type === Items ? children : null;
        actions = children.type === Actions ? children : null;
    }

    if (items) {
        if (Array.isArray(items.props.children))
            litItem = items.props.children.filter(el => el.type === Item);
        else {
            if(items.props.children?.type === Item ) litItem.push(items.props.children);
        }
    }


  return (
    <Row className='page-titles'>
        <Col className='col-auto align-self-center'>
            <ol className="breadcrumb py-1">
                {
                    litItem.map(({props}, i) => (

                        <li className={`breadcrumb-item text-nowrap ${props.className}`} key={i}>
                            {
                                props.href 
                                ? <NavLink to={props.href } className="fw-bold text-dark">{props.children}</NavLink> 
                                : props.children
                            }
                        </li>
                    ))
                }
            </ol>
        </Col>
        <Col>
            <div className="d-flex justify-content-end align-items-center">
                {actions ? actions.props.children : null}                
            </div>
        </Col>
    </Row>
  );
};


Breadcrumb.Items = Items;
Breadcrumb.Item = Item;
Breadcrumb.Actions = Actions;

export default Breadcrumb;
