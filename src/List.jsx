import { Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet, Nav } from 'react-router-dom';

function List(props) {

const navigate = useNavigate();

    return (
      props.도토리.map((val,i)=>{
        return (
            <Col key={i} onClick={()=>navigate('/detail/'+i)}>
              <div className={'img_0'+i}></div>
              <h4>{ props.도토리[i].title }</h4>
              <p>{ props.도토리[i].content }</p>
            </Col>
        );
    })
  );      
}

export default List;