import React from "react";
export default function Banner(props) {
  return (
    <>
     <div className={`${props.image}  bg-cover bg-center bg-no-repeat`}>
      <div className="container py-[116px] sm:py-[130px] md:py-[148px] lg:py-[166px] xl:py-[188px] xxl:py-[210px]  ">
      <p className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text[14] xxl:text-[16px] font-bold text-secondary">Best Furniture For Your Castle....</p>
        <p className="text-[28px] sm:text-[33px] lg:text-[42px] xl:text[47] xxl:text-[53px] font-bold">New Furniture Collection Trends in 2020</p>
        <p className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text[14] xxl:text-[16px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="btn">Shop Now</button>
      </div>
      </div>
    </>
  );
}
