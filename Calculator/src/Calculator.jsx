import React, { useState } from "react";
import Button from "@mui/material/Button";

export const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (input) => {
    setValue((prevValue) => prevValue + input);
  };

  const handleCalculate = () => {
    if (value.trim() === "") {
      setResult("Error");
      return;
    }
  
    try {
      const calculatedResult = eval(value);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(140deg , rgb(102, 102, 153) ,rgb(0, 0, 102) )"
      }}
    >
      <div
        className="calculator"
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "white"
        }}
      >
        <div className="heading" style={{ marginLeft: "9vw" }}>
          <h1>React Calculator</h1>
        </div>
        <input
          type="text"
          value={value}
          readOnly
          style={{
            display: "flex",
            height: "10px",
            marginLeft: "11px",
            padding: "15px",
            width: "40vw"
          }}
        />
        <div style={{
          display:"flex",
          marginRight:"100"
        }} >{result}  </div>
       
        <div className="grid">
          <div className="row1" style={{ display: "flex", borderRight: "10px", padding: "10px" }}>
            <Button variant="contained" onClick={() => handleButtonClick("7")}>
              7
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("8")}>
              8
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("9")}>
              9
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("+")}>
              +
            </Button>
          </div>
          <div className="row2" style={{ display: "flex", borderRight: "10px", padding: "10px" }}>
            <Button variant="contained" onClick={() => handleButtonClick("4")}>
              4
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("5")}>
              5
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("6")}>
              6
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("-")}>
              -
            </Button>
          </div>
          <div className="row3" style={{ display: "flex", borderRight: "10px", padding: "10px" }}>
            <Button variant="contained" onClick={() => handleButtonClick("1")}>
              1
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("2")}>
              2
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("3")}>
              3
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("*")}>
              *
            </Button>
          </div>
          <div className="row4" style={{ display: "flex", borderRight: "10px", padding: "10px" }}>
            <Button variant="contained" onClick={() => setValue("")}>
              C
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("0")}>
              0
            </Button>
            <Button className="equal" variant="contained" onClick={handleCalculate}>
              =
            </Button>
            <Button variant="contained" onClick={() => handleButtonClick("/")}>
              /
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


