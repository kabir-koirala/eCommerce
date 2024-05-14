import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Slug() {
  const[product,setProduct]=useState({})
  const params= useParams();
  useEffect(()=>{
    axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`).then(res =>{
      setProduct(res.data.data)
    })
    
  },[])
  return (
    <>
    <p>slug</p>
    {JSON.stringify(product)}
    </>
  )
}
