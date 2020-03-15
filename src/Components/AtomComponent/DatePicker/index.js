import React from 'react'
import { DatePicker,Form } from 'antd';

const inputTanggal = (props) => {
    const { id, name, error, helperText, placeholder,onChange, width, onFocus } = props;
    return (
        <Form.Item
        validateStatus={error ? "error" : "validating"}
        help={helperText.length !== 0 ? helperText : ""}
        style={{ textAlign: "left", width: width }}
        >
            <DatePicker 
                onChange={onChange} 
                id={id}
                data-test-id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                size={"large"}
            />
        </Form.Item>
        
    )
}

export default inputTanggal
