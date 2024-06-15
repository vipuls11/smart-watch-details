import React, { useState } from "react";
import classes from "./ProductDetails.module.css";
// import ProductImage from "../component/ProductImage";

const ProductDetails = (props) => {
  const [activeIndex, setActiveIndex] = useState("");
  console.log(props, "props vipul vishwkarma");
  const buttonHeartRate = props.Button_Heart_Rate || "Default Button Label";
  const buttonTime = props.Button_Time || "Default Button Label";
  const buttons = [
    {
      btn: buttonTime,
    },
    {
      btn: buttonHeartRate,
    },
  ];
  // const colorOptions = props.image.map((item, pos) => {
  //   return (
  //     <img
  //       key={pos}
  //       src={item.imageUrl}
  //       alt={item.StyleName}
  //       // className={classArr.join("")}
  //     />
  //   );
  // });

  console.log(activeIndex, "kbsfbds");

  const handleClick = (item) => {
    props.setImage(item.imageUrl);
    // console.log(item, "colorOptions", "hello");
  };

  return (
    <div className={classes.SmartwatchSubContent}>
      <h2 className="">{props.title}</h2>
      <p>{props.description}</p>
      <div className="">
        <h5 htmlFor="" className="">
          {props.Select_Color}
        </h5>
        <div className={classes.Smartwatchimage}>
          {/* {colorOptions} */}
          {props.image.map((item, pos) => {
            return (
              <img
                onClick={() => handleClick(item)}
                key={pos}
                src={item.imageUrl}
                alt={item.StyleName}
              />
            );
          })}
        </div>
      </div>
      <div className="">
        <h5 className="">{props.Select_Feature}</h5>
        <div className={classes.SmartwatchButton}>
          {/* <button
            type=""
            className={`${classes.Btn} ${
              activeIndex === false ? `${classes.active}` : ""
            }`}
            onClick={() => setActiveIndex(props.setIsActive(true))}
          >
            {props.Button_Time}
          </button>
          <button
            type=""
            className={`${classes.Btn} ${
              activeIndex === true ? `${classes.active}` : ""
            }`}
            onClick={() => setActiveIndex(props.setIsActive(false))}
          >
            {props.Button_Heart_Rate}
          </button> */}
          <div>
            {buttons.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(props.setIsActive(index))}
                  className={`${classes.btn}  ${
                    activeIndex === index ? classes.active : ""
                  }`}
                >
                  {item.btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <button type="" className={`${classes.Buynow} `}>
        {props.Button_Buy_Now}
      </button>
    </div>
  );
};

export default ProductDetails;
