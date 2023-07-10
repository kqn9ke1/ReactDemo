import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  console.log("inputValue", inputValue);

  const handlerInputChanger = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <div>
      <div className="inputWrapper">
        <input
          placeholder="some text"
          onChange={handlerInputChanger}
          value={inputValue}
        />
        <p>{inputValue}</p>
      </div>
    </div>
  );
};

export default Input;
