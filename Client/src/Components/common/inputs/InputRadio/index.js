import React from "react";
import InputOption from "./InputOption";

const InputRadio = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <InputOption
            key={index}
            value={option.value}
            text={option.text}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      })}
    </>
  );
};

export default InputRadio;
