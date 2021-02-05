import React from "react";
import InputOption from "./InputOption";

const InputRadio = (props) => {
  return (
    <>
      {props.options.map((option, index) => {
        return (
          <InputOption
            key={index}
            value={option.value}
            text={option.text}
            selectedOption={props.selectedOption}
            setSelectedOption={props.setSelectedOption}
          />
        );
      })}
    </>
  );
};

export default InputRadio;
