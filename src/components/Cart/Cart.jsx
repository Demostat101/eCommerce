import React from 'react'
import "./Cart.css"
import { cartContext } from '../../contextComponent/Context'
import { MdDeleteForever } from 'react-icons/md'



const Cart = () => {
  const {state} = cartContext()

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
                      <p>{item.quantity * item.price}</p>

                      <div className="quantity">
                        <button>-</button>
                        <p>{item.quantity}</p>
                        <button>+</button>
                      </div>

                      <div className="delete"><MdDeleteForever/></div>

                    </div>
                  })
                }

        </div>
      }

      
     
    </div>
  )
}

export default Cart
