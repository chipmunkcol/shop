/* eslint-disable */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Navbar, Nav, NavLink, NavItem,Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from "../store";



function Detail({도토리,탭,set탭}) {
  let[input,setInput] = useState(0);
  let [fade, setFade] = useState('');
  let [fadeMain, setFadeMain] = useState('');


  let {id} = useParams();
  let 찾은상품 = 도토리.find((a)=>{
    return a.id == id
  })

  
  const dispatch = useDispatch()


  useEffect(()=>{
    console.log(isNaN(input))
    isNaN(input) == true ? alert('숫자만!') : null
  },[input])

  useEffect(()=>{
    setTimeout(()=>{setFadeMain('end')}, 200)

    return(()=>{
      setFadeMain('')
    })
  },[])

  
    return (
        <div className={"start "+fadeMain}>
          <div className="container">
              <div className="row" >
                <div className="col-md-6">
                  <div className={'img_d_0'+id}></div>
                  </div>
                <div className="col-md-6">
                  <div className="pt-5">
                    <div><input onChange={(e)=>{
                      setInput(e.target.value)
                    }} className="input_detail"/></div>
                    <h4>{찾은상품.title}</h4>
                    <p>{도토리[도토리[id].id].content}</p>
                    <p>{도토리[도토리[id].id].price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                      dispatch(addCart(도토리[도토리[id].id]))
                    }}>주문하기</button> 
                  </div>
                </div>
              </div>
          

          <Nav fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{
              set탭(0); 
            }}>모달 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={()=>{
              set탭(1); 
            }}>모달 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={()=>{
              set탭(2)
            }}>모달 3</Nav.Link>
          </Nav.Item>
          </Nav>

            <Modall 탭={탭} fade={fade} setFade={setFade}></Modall>

        </div>
      </div>
    );
  }


  function Modall({탭, fade, setFade}){
    
    useEffect(()=>{
      setTimeout(()=>{setFade('end');}, 200) 

      return (()=>{
        setFade('') 
      })
    },[탭])

    if (탭 == 0) {
      return <div className={"start "+fade}>
                <h3>모달 1 상세페이지 입니다.</h3>
                <p>오늘은 날씨가 습하네요. 그냥그렇다구요..</p>
              </div>
    } else if (탭 == 1) {
      return <div className={"start "+fade}>
                <h3>모달 2 상세페이지 입니다.</h3>
                <p>내일도 날씨가 더울까요? 8월은 아직 오지도 않았는데..</p>
              </div>
    } else {
      return <div className={"start "+fade}>
                <h3>모달 3 상세페이지 입니다.</h3>
                <p>날도 덥고 지치겠지만 모두 힘내요 화이팅~!</p>
              </div>
    }
  
  }

  export { Detail };