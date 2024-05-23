
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./Home.css"
import { cartContext } from '../../contextComponent/Context'



const Home = () => {

    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const [category, setCategory] = useState("")
    const [limit, setLimit] = useState(5)

    const {dispatch} = cartContext()
    

  const apiData = async ()=> {
    try {

        setIsLoading(true);

        const data = await fetch(`https://fakestoreapi.com/products/${category}?limit=${limit}`);
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
  },[limit,category])

  const handleClick = (event)=>{

    console.log(allData);
    console.log(category);
    setCategory(event.target.value)
    setLimit("")
  }

  console.log(category);
  console.log(allData);
  console.log(limit);





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

        <div><button onClick={handleClick} value="category/jewelery">Jewelery</button>
        <button onClick={handleClick}  value="">All</button></div>
      
    </div>
  )
}

export default Home
