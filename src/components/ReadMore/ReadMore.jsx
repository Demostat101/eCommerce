
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ReadMore.css"
import { cartContext } from '../../contextComponent/Context'




const ReadMore = () => {


    const {state, dispatch} = cartContext()
    
    const [allData, setAllData] = useState({});
    
    const {productid} = useParams()
    const url = `https://fakestoreapi.com/products/${productid}`


    const apidata = async ()=> {
      try {
  
          const data = await fetch(url);
          console.log(data);

          const result = await data.json();
          console.log(result.rating.rate);
       
          setAllData(result)
  
          return result
          
      } catch (error) {
          console.log(error);
      }
    }
  
    useEffect(()=>{
          apidata()
    },[])

  return (
    <div className='ReadMore'>

        
                        
                            <div className="readmore">

                                <div><img src={allData.image} alt="avatar" /></div>
                                <div className='category'>{allData.category}</div>
                                <div>{allData.title}</div>
                                <div className='description'>{allData.description}</div>
                                <div><span>$ {allData.price}</span></div>
                              
                                <button className='Btn' onClick={()=>dispatch({type:"ADD", payload:allData})}>ADD TO CART</button>
                               
                            </div>
                        
     
      
    </div>
  )
}

export default ReadMore
