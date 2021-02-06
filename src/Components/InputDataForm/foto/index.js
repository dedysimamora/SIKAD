import React, {useState, useEffect} from 'react'
import {  Upload, Progress,  Button, Tooltip } from "antd";
import { CloseOutlined , PlusOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';


import "./Foto.css"

const FotoUpload = (props) => {
    const isMobile = window.innerWidth <= 600
    const {getImageSize, formik} = props
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)
    const [progres, setProgres] = useState(0)

    useEffect(() => {
        if(formik.values.foto == ""){
            setImageUrl(null)
            formik.setFieldValue('foto', "")
        }else {
            setImageUrl(formik.values.foto)
        }
    }, [formik.values.foto])

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            callback(reader.result)
        });
        reader.readAsDataURL(img);
    }

    const delteFoto = (e) => {
        setImageUrl(null)
        e.stopPropagation();
        formik.setFieldValue('foto', "")
    }

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
      };
    
   
    const handleChange = info => {
        if(info){
            if(info.event){
                if(info.event.percent){
                    setProgres(Math.round(info.event.percent))
                }
            }
        }
        
        
        if (info.file.status === 'uploading') {
          setLoading(true)
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (imageUrl) => {
            formik.setFieldValue('foto', imageUrl)
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
            className={isMobile ? "photoMobile" : "photo"}
            showUploadList={false}
            customRequest={dummyRequest}
            onChange={handleChange}
        >
            {
                imageUrl ? 
                    <div>
                        <img src={imageUrl} alt="avatar" style={{ width:"89%", height:'89%' }} /> 
                        <Button 
                            type="dashed" 
                            className={'deleteFotoButton'}
                            onClick={delteFoto}
                        >
                            Hapus Foto
                        </Button>
                    </div>
                    
                : 
                <div>
                    {loading ? 
                        <Progress type="circle" percent={progres} /> : 
                        <React.Fragment>
                            <CloseOutlined className="uploadFotoIcon" /> 
                            <div className="ant-upload-text">Unggah Foto</div>
                        </React.Fragment>
                    }
                    
                </div>

            }
        </Upload>
    )
}

export default FotoUpload
