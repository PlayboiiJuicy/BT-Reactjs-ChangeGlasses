import React from "react";

const ModelGlasses = ({ selectedGlasses }) => {
  if (!selectedGlasses) {
    return null;
  }
  let style11 = {
    position: "absolute",
    top: "100px",
    left: "195px",
  };
  let info = {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    textAlign: "left",
    color: "white",
    backgroundColor: "rgb(8,8,8,0.5)",
    padding: "10px",
    with: "100%",
  };
  return (
    <div>
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
    </div>
  );
};

export default ModelGlasses;
