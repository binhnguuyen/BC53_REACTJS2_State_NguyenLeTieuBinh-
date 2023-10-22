import React, { useState } from "react";
import data from "./dataGlasses.json";
import { GlassList } from "./GlassList";

export const BaiTapGlass = () => {
  const bgImage = `url("glassesImage/background.jpg")`;
  const modelImage = `glassesImage/model.jpg`;
  const wearModelImage = `glassesImage/v1.png`;
  
  const [glass, setGlass] = useState([
    {
      id: 1,
      price: 30,
      name: 
        "GUCCI G8850U",
      url: 
        "./glassesImage/v1.png",
      desc: 
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ])


  // Tạo hàm wearGlass nhận vào tham số glass
  const wearGlass = (glass) => {
    // console.log('glass: ', glass);
    setGlass(glass)
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
          // position: "absolute",
        }}
      >
        <div
          className="row"
          style={{
            position: "relative",
            top: 570,
          }}
        >
          <div className="col-6">
            <img
              src={modelImage}
              alt=""
              style={{
                width: 270,
              }}
            />
          </div>
          <div className="col-6" 
            style={{
            }}>
            <img
              src={modelImage}
              alt=""
              style={{
                position: "absolute",
                width: 270,
              }}
            />
            <img src={wearModelImage} alt="" style={{
              width: 160,
              position: "relative",
              top: "24%",
              left: "12%",
              zIndex: 2,
            }}/>
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
