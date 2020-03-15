import React, {useState, useEffect} from 'react'
import { Button , Form, Row, Col, Upload, message  } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import {storage} from  '../../Commons/FirebaseConfig'

import TempatSimpan from "./tempatSimpan"
import HakCipta from "./hakcipta"
import Keterangan from "./keterangan"
import NoKlasifikasi from "./noKlasifikasi"
import Indeks from "./indeks"
import LokasiTempat from "./lokasiTempat"
import UraianInformasi from "./uraianInformasi"
import TipeArsip from "./tipeArsip"
import Foto from "./foto"
import PanjangFoto from "./panjangFoto"
import LebarFoto from "./lebarFoto"
import KualitasFoto from "./KualitasFoto"
import TanggalSimpan from "./tanggalSimpan"
// import Kualitas from "./kualitas"
// import TanggalSimpan from "./tanggalSimpan"
// import NoDefiatif from "./noDefiatif"
// import Ukuran from "./ukuran"

import "./InputDataForm.css"

const InputDataForm = (props) => {
    
    const {formik, setLoadingFunct} = props
    const [noDefinitif, setNoDefinitif] = useState(null)
    const [tglSimpan, setTglSimpan] = useState(null)
    const [sizeFoto, setSizeFoto] = useState(null)
    const [fotoQuality, setFotoQuality] = useState(null)

    const handleSubmit = () => {
        setLoadingFunct(true)
        const uploadImage = storage.ref(`images/image-${noDefinitif}`).putString(formik.values.foto, 'data_url')
            uploadImage.on(
                "state_changed",
                snapshoot => {},
                error => {
                    console.log(error);
                    
                },
                () => {
                    storage
                        .ref("images")
                        .child(`image-${noDefinitif}`)
                        .getDownloadURL()
                        .then( url => {
                            formik.setFieldValue('foto', url)
                            formik.handleSubmit()
                        })
                }
            )
    }

    useEffect(() => {
        let d = new Date();
        let n = d.getSeconds();
        formik.setFieldValue('noDefinitif', n)
    }, [])
  
    return (
        <Form layout={"vertical"}>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                <div style={{width:'50%'}}>
                    <Row style={{marginBottom:'15px'}}>
                        <Col span={12}>
                            <p className={"noDefinitif"}>No Defiatif : {formik.values.noDefinitif !== null ? formik.values.noDefinitif : "-"}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <NoKlasifikasi  
                                formik={formik}
                            />
                        </Col>
                        <Col span={8}>
                            <TanggalSimpan 
                                formik={formik}
                            />
                        </Col>
                        <Col span={8}>
                            <TipeArsip 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <HakCipta 
                                formik={formik}
                            />
                        </Col>
                        <Col span={12}>
                            <LokasiTempat 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Keterangan 
                                formik={formik}
                            />
                        </Col>
                        <Col span={12}>
                            <TempatSimpan 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Indeks 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <UraianInformasi 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    
                </div>
                <div style={{width:"50%"}}>
                    <Row style={{marginLeft : "20px"}}>
                        <Col span={24}>
                            <Foto 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row style={{marginBottom:'-10px', marginTop:'10px'}}>
                        <Col span={4} offset={4}>
                        <p style={{marginTop:'5px'}}>Ukuran Foto :</p>
                        </Col>
                        <Col  span={3} style={{flexDirection:'row'}}>
                            <PanjangFoto 
                                    formik={formik}
                                />
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'5px', marginLeft:'-40px'}}>Cm</p>
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'5px', marginLeft:'-25px'}}>X</p>
                        </Col>
                        <Col  span={3}  style={{ display:'flex', flexDirection:'row'}}>
                                <LebarFoto 
                                    formik={formik}
                                />
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'5px', marginLeft:'-40px'}}>Cm</p>
                        </Col>
                        <Col  span={6}>
                         <KualitasFoto formik={formik} />
                        </Col>
                        
                    </Row>

                </div>
            </div>
            <div style={{marginTop:'35px'}}>
                <Row style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                    <Col span={23}>
                        <Button 
                            block 
                            onClick={handleSubmit}
                            className={"SaveButton"}
                            disabled={!formik.isValid}
                        >
                            Unggah Data
                        </Button>
                    </Col>
                </Row>
            </div>
            


            
       </Form>
    )
}

export default InputDataForm
