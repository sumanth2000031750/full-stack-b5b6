import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Product from './Product';


export default function Home() {
    let [ data, setData] = useState([])

    const fetchData = async () => {

            try{
            const response = await axios.get('http://localhost:3000/products');
            setData(response.data);
            }catch(error){
                console.log(error);
            }

    };


    useEffect(()=>{
        fetchData();
    },[])


  return (
    <div>
      <div>{JSON.stringify(data)}</div>
        {
           data.map((ele,index)=>{
                return <Product key={index}  title={ele.title} price={ele.price} desc={ele.category} image={ele.image} />
           })
        }
    </div>
  )
      }