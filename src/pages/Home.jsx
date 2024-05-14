import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import Banner from "../assets/component/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "./products/Product";
import axios, { isCancel, AxiosError } from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Home() {
  const [products, setProducts] = useState([]); // product is empty at first than data is entered from api
  const[isLoading, setIsLoading] =useState(true)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res);
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false)
      });
  }, []); //component did mount.

  return (
    <>
      {
        // JSON.stringify(products)
      }
      {/* <Header /> */}
      <Slider {...settings}>
        <Banner image={"bg-img1"} />
        <Banner image={"bg-img2"} />
        <Banner image={"bg-img3"} />
      </Slider>
      
      

      <div className="xxl:py-[210px]  container grid gap-4  py-[116px] sm:py-[130px] md:grid-cols-2 md:py-[148px] lg:py-[166px] xl:grid-cols-4 xl:py-[188px]">
        {products.map((el) => (
          <Product 
          _id={el._id}
          key={el._id} 
          name={el.name} 
          price={el.price}
           image={el.image} />
        ))}
        {
         products.length ==0
          &&(
          <>
          <Skeleton className="h-[250px]" /> 
        <Skeleton className="h-[250px]" /> 
        <Skeleton className="h-[250px]" /> 
        <Skeleton className="h-[250px]" /> 
          </>
          )
        }
         {
          !isLoading && products.length==0 &&(
           <>
            <p className="text-center text-red-700 h-10">!!! No products found. !!!</p></>
           
          )
        }
        
      </div>
     
    </>
  );
}
