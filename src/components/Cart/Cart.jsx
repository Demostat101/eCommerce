import React from 'react'
import "./Cart.css"
import { cartContext } from '../../contextComponent/Context'
import { MdDeleteForever } from 'react-icons/md'



const Cart = () => {
  const {state, dispatch} = cartContext()


  const total = state.reduce((total, item) => {

    let number = (total + item.price * item.quantity)

      number =Number(number.toFixed(2));
    return number
  }, 0)

  return (
    <div className='Cart'>

      {
        state.length < 1 
        ? <div>Cart is current empty</div> 
        : <div>

          {
                  state.map((item) => {
                    return <div className="cart-content" key={item.id}>

                      <img className='cart-image' src={item.image} alt="" />
                      <p>{item.title}</p>
                      <p>{item.quantity}</p>
                      <p>$ {item.quantity * item.price}</p>

                      <div className="quantity">
                        <button  onClick={()=> dispatch({type: "DECREASE", payload:item})} disabled={item.quantity === 1} >-</button>
                        <p>{item.quantity}</p>
                        <button onClick={()=> dispatch({type: "INCREASE", payload:item})}>+</button>
                      </div>

                      <div className="delete" onClick={()=> dispatch({type: "REMOVE", payload:item})}><MdDeleteForever/></div>

                    </div>
                  })
                }

        </div>
      }

       {
        state.length > 0 ? <h4>{total}</h4> : ""
       }

      
     
    </div>
  )
}

export default Cart
