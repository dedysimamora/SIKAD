import React from 'react'
import { Select, Form } from 'antd';

import "./Select.css"

const SelectInput = (props) => {
    const {defaultValue, placeholder, error, helperText, onSelect } = props
    const { Option } = Select;
    return (
        <Form.Item
            // validateStatus={error ? "error" : "validating"}
            // help={helperText.length !== 0 ? helperText : ""}
            style={{ textAlign: "left", width: "95%" }}
        >
             <Select 
                placeholder={placeholder}
                className={"selectInput"}
                size={"large"}
                error={error}
                onSelect={onSelect}
                helperText={helperText}
            >
                <Option value="personalFile">Personal File</Option>
                <Option value="foto">Foto</Option>
                <Option value="video">Video</Option>
                <Option value="suratMasuk">Surat Masuk</Option>
                <Option value="suratKeluar">Surat Keluar</Option>
                <Option value="kartografi">Kartografi</Option>
            </Select>

        </Form.Item>
       
    )
}

export default SelectInput
