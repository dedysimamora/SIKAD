import React from 'react'
import { Input, Form } from 'antd';



import "./TextArea.css"

const TextAreaInput = (props) => {
    const {row, id, name, error, helperText, placeholder, maxLength, defaultValue, onChange, onFocus } = props
    const {TextArea} = Input
    return (
        <Form.Item
            validateStatus={error ? "error" : "validating"}
            help={helperText.length !== 0 ? helperText : ""}
            style={{ textAlign: "left", width: "100%" }}
        >
            <TextArea 
                rows={row} 
                id={id}
                data-test-id={id}
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                value={defaultValue}
                onChange={onChange}
                onFocus={onFocus}
            />

        </Form.Item>
    )
}

export default TextAreaInput
