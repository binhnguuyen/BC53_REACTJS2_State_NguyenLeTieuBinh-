import React, { useState } from "react";
import data from "./dataGlasses.json";

export const BaiTapGlass = () => {
  // console.log('data: ', data)
  return (
    <div className="container mt-3">
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(image/background.jpg)`,
          backgroundRepeat: "no-repeats",
          //   backgroundSize: "cover",
          width: 1000,
          height: 1000,
        }}
      >
        <div
          className="row"
          style={{
            position: "relative",
            top: 600,
          }}
        >
          <div className="col-6">
            <img
              src="image/model.jpg"
              alt=""
              style={{
                width: 250,
              }}
            />
          </div>
          <div className="col-6">
            <img
              src="image/model.jpg"
              alt=""
              style={{
                width: 250,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
