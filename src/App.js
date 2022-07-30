/* eslint-disable */
import './App.css';
import { Col, Row, Navbar, Nav, Container, Modal } from 'react-bootstrap';
import { useState } from 'react';
import json_data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { Detail } from './routes/detail'
import List from './List';
import axios from 'axios';
import Cart from './routes/Cart';


function App() {

let [도토리, set도토리] = useState(json_data);
let navigate = useNavigate();
let [sort, setSort] = useState(0);
let [count, setCount] = useState(0);
let [탭, set탭] = useState(0);


  return (
    <div className='App'>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="#home">다람쥐's</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
                  <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <div className='img'></div>
            <Container>
              <Row md={3}> 

                  <List 도토리={도토리} ></List>

              </Row>
            </Container> 
            {
              count == 2 ? null : 

              <button onClick={(e)=>{ setCount(count+1);
                if(count == 0){
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((response)=>{
                    console.log(도토리)
                    console.log(response.data)
                    
                    let copy = [...도토리];
                    response.data.map((val,i)=>{
                      copy.push(response.data[i]);
                      set도토리(copy)
                    })
                  })
                  .catch(()=>{
                    console.log('실빼애앵애ㅒ얙!!')
                  })
                } else if(count == 1) {
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((response)=>{
                    console.log(response.data)
    
                    let copy = [...도토리];
                    response.data.map((v,i)=>{
                      copy.push(response.data[i]);
                      set도토리(copy);
                    })
                  })
                  .catch(()=>{
                    console.log('실빼애앵애ㅒ얙!!2222')
                  })
                } 
                }}>더보기</button>
            }
            

          </>
      } />


        <Route path={'/detail/:id'} element={<Detail 도토리={도토리} 탭={탭} set탭={set탭}/>} />

        <Route path='/cart' element={<Cart 도토리={도토리} set도토리={set도토리}></Cart>} />

        <Route path='*' element={<div>없는 페이지 입니다</div>}/>
      </Routes>
      
  
      
    </div>
  );
}



  




export default App;
