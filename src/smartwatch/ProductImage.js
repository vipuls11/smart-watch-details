import React from "react";
import classes from "./ProductImage.module.css";

const ProductImage = (props) => {
  // console.log(props, "sfdsgdfhgdfh");
  const CurrentHours =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const CurrentMinutes =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  // console.log(props, "hiiiiiiiiiiiiiiiii");
  // console.log(CurrentHours, "CurrentHours", CurrenMinutes);

  return (
    <div>
      <div className={classes.SmartwatchMainImage}>
        <img
          src={props.image}
          alt="Main-Image"
          className=""
          style={{ width: "100%" }}
        />
        <div className={classes.Heartbeat}>
          {props.isActive ? (
            <div className={classes.Heartbeat}>
              <p style={{ padding: "0px", margin: "0px" }}>
                <i class="fa-solid fa-heart"></i>
              </p>
              <b>78</b>
            </div>
          ) : (
            <p
              className={classes.Datetime}
            >{`${CurrentHours}:${CurrentMinutes}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
