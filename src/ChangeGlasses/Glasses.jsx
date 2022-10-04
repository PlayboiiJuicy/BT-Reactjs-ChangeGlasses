import React from "react";

const Glasses = ({ data, onSelect }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((value, idx) => {
          return (
            <button
              style={{
                border: "1px solid rgb(0,0,0,0.2)",
                backgroundColor: "transparent",
              }}
              onClick={() => {
                onSelect(value);
              }}
              className="col-2 m-2 p-2"
              key={value.id}
            >
              <img src={value.url} alt={idx} width="100%" height="100px" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Glasses;
