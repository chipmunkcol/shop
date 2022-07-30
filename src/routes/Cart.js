import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store';


function Cart(){

    const state = useSelector((state)=> state)
    console.log(state)

    const dispatch = useDispatch()


    return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
            state.cart.map((val,i)=>{
                return(
                    <tr key={i}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.count}</td>
                        <td>
                            <button onClick={()=>{
                                dispatch(add(val.id))
                            }}>
                            +</button>
                        </td>   
                    </tr>
                );
            })
        }
      </tbody>
    </Table>
    )
}

export default Cart;