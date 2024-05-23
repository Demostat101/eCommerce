
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./Home.css"
import { cartContext } from '../../contextComponent/Context'

const url = "https://fakestoreapi.com/products"

const Home = () => {

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    const {dispatch} = cartContext()
    

  const apiData = async ()=> {
    try {

        setIsLoading(true);

        const data = await fetch(url);
        const result = await data.json();
        if (result) {
            
            setAllData(result)
            setIsLoading(false)
        } 
        return allData
        
    } catch (error) {
        setErrMsg(error.message)
        setIsLoading(false)
        console.log(error);

    }
  }

  useEffect(()=>{
        apiData()
  },[])






  return (
    <div className='home'>

        {isLoading ? <div className='isloading'>Page Loading!...</div> :"" }
        {
            allData.map((val)=>{

                val.quantity = 1
                
                return <div className="all" key={val.id}>
                    <div><img src={val.image} alt={val.category} /></div>
                    <div className='title'>{val.category}</div>

                    <div className='rating'>{val.rating.rate < 2 && val.rating.rate < 1.8 

                    ? <div><FaStar style={{color:"gold"}} /> <FaStarHalfStroke style={{color:"gold"}} /> </div>

                    : val.rating.rate >= 1.8 && val.rating.rate < 2.5

                    ? <div><FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> </div>

                    :  val.rating.rate < 2.8 

                    ? <div><FaStar style={{color:"gold"}} /> <FaStar style={{color:"gold"}} /> <FaStarHalfStroke style={{color:"gold"}}/></div> 

                    :  val.rating.rate > 2.8 && val.rating.rate < 3.5 

                    ? <div><FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/></div> 

                    : val.rating.rate <= 3.8 

                    ?  <div><FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStarHalfStroke style={{color:"gold"}}/></div> 

                    : val.rating.rate > 3.8 && val.rating.rate < 4.5 

                    ? <div><FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/></div> 

                    : val.rating.rate <= 4.8 

                    ? <div><FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStarHalfStroke style={{color:"gold"}}/> </div> 

                    : val.rating.rate > 4.8 

                    ? <div><FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/> <FaStar style={{color:"gold"}}/></div> 
                    
                    :  <FaStar style={{color:"gold"}}/> } <div className='rate'>({val.rating.rate})</div></div>



                    <div><span>$ {val.price}</span></div>
                    <button className='add-cart' onClick={()=>dispatch({type:"ADD", payload:val})}>ADD TO CART</button>
                    
                    <Link to={`/product/${val.id}`}><button className='btn'>READ MORE</button></Link>
                </div>
            })
        }
      
    </div>
  )
}

export default Home
