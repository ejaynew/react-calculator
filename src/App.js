import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  const [buttonColor, setButtonColor] = useState("#61dafb");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "⌫") {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (event) => {
    if (document.activeElement.tagName !== "INPUT") {
      const key = event.key;

      if (/[\d\+\-\*\/]/.test(key)) {
        setInput((prevInput) => prevInput + key);
      } else if (key === "=" || key === "Enter") {
        event.preventDefault(); // Prevent default behavior
        handleButtonClick("=");
      } else if (key === "Backspace") {
        handleButtonClick("⌫");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleButtonClick]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#ececec",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label htmlFor="bgColorPicker">Background Color:</label>
        <input
          type="color"
          id="bgColorPicker"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <label htmlFor="btnColorPicker">Button Color:</label>
        <input
          type="color"
          id="btnColorPicker"
          value={buttonColor}
          onChange={(e) => setButtonColor(e.target.value)}
        />
      </div>

      <Display input={input} result={result} backgroundColor={backgroundColor} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "10px",
        }}
      >
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          7
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          8
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          9
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          /
        </Button>

        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          4
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          5
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          6
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          *
        </Button>

        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          1
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          2
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          3
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          -
        </Button>

        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          0
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          .
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          =
        </Button>
        <Button
          onClick={handleButtonClick}
          style={{ backgroundColor: buttonColor }}
        >
          +
        </Button>

        <Button
          onClick={() => handleButtonClick("C")}
          style={{ backgroundColor: buttonColor }}
        >
          C
        </Button>
        <Button
          onClick={() => handleButtonClick("⌫")}
          style={{ backgroundColor: buttonColor }}
        >
          ⌫
        </Button>
      </div>
    </div>
  );
}

export default App;
