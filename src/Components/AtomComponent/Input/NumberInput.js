import React from "react";
import { Form, Input } from "antd";
import Cleave from "cleave.js/dist/cleave-react-node";
import "./NumberInput.css";

const NumberInput = (props) => {
  const {
    id,
    name,
    placeholder,
    error,
    helperText,
    maxLength,
    defaultValue,
    onChange,
    onFocus,
    customClassName,
    width,
  } = props;
  return (
    <Form.Item
      validateStatus={error ? "error" : "validating"}
      help={helperText.length !== 0 ? helperText : ""}
      style={{ textAlign: "left", width: width }}
    >
      <Input.Group>
        <Cleave
          id={name}
          name={name}
          value={defaultValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(event) => {
            const tempEvent = event;
            tempEvent.target.value = event.target.rawValue;
            onChange(tempEvent);
          }}
          onFocus={onFocus}
          className={`ant-input input-number ${customClassName}`}
          style={{ paddingRight: "0px" }}
        />
      </Input.Group>
    </Form.Item>
  );
};

export default NumberInput;
