import React, {useState, useEffect} from 'react'
import { Button , Form, Row, Col, Upload, message  } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import "./Foto.css"

const FotoUpload = (props) => {
    const {getImageSize} = props
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            let i = new Image()
            i.onload = function(){
                getImageSize({
                    width : i.width,
                    height : i.height,
                    size : Math.round(img.size / 1024)
                })
            };
            i.src = reader.result
            
            callback(reader.result)
        });
        reader.readAsDataURL(img);
    }
    
    const beforeUpload = (file) => {
        
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
        if (info.file.status === 'uploading') {
          setLoading(true)
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl) => {
            setImageUrl(imageUrl)
            setLoading(false)
          }
            
            // this.setState({
            //   imageUrl,
            //   loading: false,
            // }),
          );
        }
      };



    return (
        <Upload
            name="avatar"
            listType="picture-card"
            className="photo"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {
                imageUrl ? 
                    <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> 
                : 
                <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div className="ant-upload-text">Upload</div>
                </div>

            }
        </Upload>
    )
}

export default FotoUpload
