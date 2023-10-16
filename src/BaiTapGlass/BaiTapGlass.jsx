import React, { useState } from "react";
import data from "./dataGlasses.json";
import { GlassList } from "./GlassList";

export const BaiTapGlass = () => {
  const bgImage = `url("glassesImage/background.jpg")`;
  const modelImage = `glassesImage/model.jpg`;
  
  // Tạo hàm wearGlass nhận vào tham số glass
  const wearGlass = (glass) => {
    console.log('glass: ', glass);
  }
  return (
    <div className="container mt-3">
      <div
        className="img-fluid"
        style={{
          backgroundImage: bgImage,
          backgroundRepeat: "no-repeats",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 900,
        }}
      >
        <div
          className="row"
          style={{
            position: "relative",
            top: 590,
          }}
        >
          <div className="col-6">
            <img
              src={modelImage}
              alt=""
              style={{
                width: 250,
              }}
            />
          </div>
          <div className="col-6">
            <img
              src={modelImage}
              alt=""
              style={{
                width: 250,
              }}
            />
          </div>
        </div>
      </div>
      <GlassList 
        data={data}
        wearGlass={wearGlass}
      />
    </div>
  );
};
