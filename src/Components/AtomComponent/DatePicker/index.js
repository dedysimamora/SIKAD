import React from 'react'
import { DatePicker,Form } from 'antd';
import moment from 'moment';

const inputTanggal = (props) => {
    const { id, name, error, helperText, placeholder,onChange, width, onFocus, value } = props;
    const dateFormat = 'DD-MM-YYYY';
    return (
        <Form.Item
        validateStatus={error ? "error" : "validating"}
        help={helperText.length !== 0 ? helperText : ""}
        style={{ textAlign: "left", width: width }}
        >
            <DatePicker 
                onChange={onChange} 
                value={value == "" ? undefined : (moment(`${value}`, dateFormat))} 
                format={dateFormat}
                id={id}
                data-test-id={id}
                name={name}
                placeholder={placeholder}
                onFocus={onFocus}
                size={"large"}
            />
        </Form.Item>
        
    )
}

export default inputTanggal
