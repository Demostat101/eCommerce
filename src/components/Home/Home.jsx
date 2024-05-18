
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import "./Home.css"

const url = "https://fakestoreapi.com/products"

const Home = () => {

    const [allData, setAllData] = useState([]);


  const apiData = async ()=> {
    try {

        const data = await fetch(url);
        const result = await data.json();
        console.log(data);
        console.log(result);
     
        setAllData(result)
        console.log(allData);

        return allData
        
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
        apiData()
  },[])


  return (
    <div className='home'>

        {
            allData.map((val)=>{
                return <div className="all" key={val.id}>
                    <div><img src={val.image} alt={val.category} /></div>
                    <div className='title'>{val.category}</div>
                    <div>{val.rating.rate >= 4 ? (<FaStar style={{color:"gold"}}/>) : <FaStarHalfStroke style={{color:"gold"}}/>} {val.rating.rate}</div>
                    <div><span>$ {val.price}</span></div>
                    <button>ADD TO CART</button>
                    <Link to={`/product/${val.id}`}><button className='btn'>READ MORE</button></Link>
                </div>
            })
        }
      
    </div>
  )
}

export default Home
