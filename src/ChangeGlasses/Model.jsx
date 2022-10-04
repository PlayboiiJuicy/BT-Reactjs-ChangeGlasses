import React from "react";
import ImgModel from "../model.jpg";
import "./Model.css";
import ModelGlasses from "./ModelGlasses";

const Model = ({ selectedGlasses }) => {
  let style1 = { position: "realtive" };
  let style11 = {
    position: "absolute",
    top: "100px",
    left: "140px",
  };
  let info = {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    textAlign: "left",
    color: "white",
    backgroundColor: "rgb(8,8,8,0.5)",
    padding: "10px",
    width: "100%",
  };
  let style2 = {
    position: "absolute",
    top: "105px",
    left: "140px",
  };

  //   if (!selectedGlasses) {
  //     return null;
  //   }

  //   return (
  //     <div className="container mt-4">
  //       <div className="wrapper row d-flex justify-content-around">
  //         <div className="model--left col-4  text-center " style={style1}>
  //           <img src={ImgModel} alt="dasd" width={350} height={400} />
  //           <img
  //             style={style11}
  //             src={selectedGlasses.url}
  //             alt={selectedGlasses.id}
  //             width={160}
  //             height={60}
  //           />
  //           <div style={info} className="infoGlasses">
  //             <h3>
  //               {selectedGlasses.name} -
  //               <em style={{ color: "red" }}> {selectedGlasses.price}$</em>
  //             </h3>
  //             <p> {selectedGlasses.desc}</p>
  //           </div>
  //           {/* <ModelGlasses selectedGlasses={selectedGlasses} /> */}
  //         </div>
  //         <div className="model--right col-4 text-center" style={style1}>
  //           <img src={ImgModel} alt="dasd" width={350} height={400} />
  //           <img
  //             style={style2}
  //             src={selectedGlasses.url}
  //             alt={selectedGlasses.id}
  //             width={160}
  //             height={60}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Model;

  // =================
  return (
    <div className="container mt-4">
      <div className="wrapper row d-flex justify-content-around">
        <div className="model--left col-4  text-center " style={style1}>
          <img src={ImgModel} alt="dasd" width={350} height={400} />
          {!selectedGlasses ? null : (
            <>
              {" "}
              <img
                style={style11}
                src={selectedGlasses.url}
                alt={selectedGlasses.id}
                width={160}
                height={60}
              />
              <div style={info} className="infoGlasses">
                <h3>
                  {selectedGlasses.name} -
                  <em style={{ color: "red" }}> {selectedGlasses.price}$</em>
                </h3>
                <p> {selectedGlasses.desc}</p>
              </div>
            </>
          )}
        </div>
        <div className="model--right col-4 text-center" style={style1}>
          <img src={ImgModel} alt="dasd" width={350} height={400} />
          {!selectedGlasses ? null : (
            <>
              <img
                style={style2}
                src={selectedGlasses.url}
                alt={selectedGlasses.id}
                width={160}
                height={60}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Model;
