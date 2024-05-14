  import React from 'react'
  import { FaCartArrowDown } from "react-icons/fa6";
  import {Link,useNavigate} from "react-router-dom" //those which have use at front is called hook and its is a default hook

  export default function Product(props) {

    const navigate = useNavigate()
    return (
      <>
      <div 
      onClick={()=>{
        navigate(`/product/${props._id}`);   
      }}
      
      className="hover:cursor-pointer relative group bg-primary-lite shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2) ] ">
                <div className="items-center absolute top-[11px] left-[11px] group-hover:flex h-[30px] w-[30px] justify-center rounded-full border border-primary hidden transiton-all">
                  <FaCartArrowDown className=" text-primary " />
      
                </div>
                
                <img src={props.image} className="mx-auto mt-[20px] mb-[10px] h-[150px] w-full object-cover
                " />
                <div className="bg-white p-[15px]  text-center transition-all group-hover:bg-primary group-hover:text-white ">
                
                  <p><Link to={"/"}>{props.name}</Link></p>
                  <p>${props.price}</p>
                </div>
              </div>
      </>
    )
  }
