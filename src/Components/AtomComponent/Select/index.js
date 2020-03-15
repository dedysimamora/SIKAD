import React from 'react'
import { Select, Form } from 'antd';

import "./Select.css"

const SelectInput = (props) => {
    const {className,size, placeholder, error, width, helperText, onSelect, suggestion } = props
    const { Option } = Select;
    return (
        <Form.Item
            // validateStatus={error ? "error" : "validating"}
            // help={helperText.length !== 0 ? helperText : ""}
            style={{ textAlign: "left", width: width }}
        >
             <Select 
                placeholder={placeholder}
                className={className}
                size={size}
                error={error}
                onSelect={onSelect}
                helperText={helperText}
            >
                {
                    suggestion.map((data, index) => {
                        return(<Option id={`${data.value}-index-${index}`} value={data.value}>{data.label}</Option>)
                    })
                }
            </Select>

        </Form.Item>
       
    )
}

export default SelectInput
