import React from "react";

import { Form, Input } from "antd";

import "./TextInput.css";

const TextInput = props => {
    const { id, name, error, helperText, placeholder, maxLength, defaultValue, onChange, onFocus } = props;

    return (
            <Form.Item
            validateStatus={error ? "error" : "validating"}
            help={helperText.length !== 0 ? helperText : ""}
            style={{ textAlign: "left", width: "95%" }}
            >
                <Input
                    id={id}
                    data-test-id={id}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={defaultValue}
                    onChange={onChange}
                    onFocus={onFocus}
                    size={"large"}
                />
            </Form.Item>
    );
};

export default TextInput;