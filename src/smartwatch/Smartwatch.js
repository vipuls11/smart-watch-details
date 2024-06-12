import React, { useState } from "react";
import classes from "./Smartwatch.module.css";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductData from "./Productdata";
import Home from "../Home";

function Smartwatch(props) {
  const [image, setImage] = useState("https://imgur.com/iOeUBV7.png");
  const [isActive, setIsActive] = useState(true);

  const SmartWatch = {
    Mainimage:
      "https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-mens-transparent-hour-hand-watch-png-image_6687176.png",
    Title: "FitBit 19 - The Smartest Watch",
    Discription:
      'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"\'"s standard dummy text ever since the 1500s.',
  };

  console.log(image, "image");
  return (
    <div>
      <div className={classes.logcontainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon imge"
          className={classes.Amazonlog}
        />
      </div>

      <div className={classes.SmartwatchSection}>
        <ProductImage image={image} isActive={isActive} />
        <ProductDetails
          setImage={setImage}
          title={ProductData.title}
          setIsActive={setIsActive}
          description={ProductData.description}
          Select_Color={ProductData.Select_Color}
          Button_Time={ProductData.Button_Time}
          Button_Heart_Rate={ProductData.Button_Heart_Rate}
          Button_Buy_Now={ProductData.Button_Buy_Now}
          image={ProductData.colorOptions}
        />
        <Home
          Button_Heart_Rate={ProductData.Button_Heart_Rate}
          Button_Time={ProductData.Button_Time}
        />
      </div>
    </div>
  );
}

export default Smartwatch;
