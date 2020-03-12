import React, {useState, useEffect} from 'react'
import { Button , Form, Row, Col, Upload, message  } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

import TempatSimpan from "./tempatSimpan"
import HakCipta from "./hakcipta"
import Keterangan from "./keterangan"
import KodeKlasifikasi from "./kodeKlasifikasi"
import Indeks from "./indeks"
import LokasiTempat from "./lokasiTempat"
import UraianInformasi from "./uraianInformasi"
import TipeArsip from "./tipeArsip"
import Foto from "./foto"
// import Kualitas from "./kualitas"
// import TanggalSimpan from "./tanggalSimpan"
// import NoDefiatif from "./noDefiatif"
// import Ukuran from "./ukuran"

import "./InputDataForm.css"

const InputDataForm = (props) => {
    const {formik} = props
    const [noDefiatif, setNoDefiatif] = useState(null)
    const [tglSimpan, setTglSimpan] = useState(null)
    const [sizeFoto, setSizeFoto] = useState(null)
    const [fotoQuality, setFotoQuality] = useState(null)

    useEffect(() => {
        formik.setFieldValue('tanggalSimpan',moment(Date.now()).format('DD-MM-YYYY'))
        formik.setFieldValue('noDefiatif', "128")
    }, [])

    const getImageSize = (data) => {
        console.log(data, "<<<<<<<<<<<<<<<,, data");
        if(data.width < 100 || data.height < 100){
            setFotoQuality("Buruk")
        } else if (data.width > 100 && data.width < 500) {
            setFotoQuality("Sedang")
        } else if(data.width > 100 || data.height > 100) {
            setFotoQuality("Baik")
        }

        setSizeFoto(`${data.width} px X ${data.height} px - ${data.size} kb`)
        
    }

   

    
    return (
        <Form layout={"vertical"}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width:'50%'}}>
                    <Row style={{marginBottom:'15px'}}>
                        <Col span={12}>
                            <p className={"noDefiatif"}>No Defiatif : {formik.values.noDefiatif !== null ? formik.values.noDefiatif : "-"}</p>
                        </Col>
                        <Col span={12}>
                            <p className={"TanggalSimpan"}>Tanggal Simpan : {formik.values.tanggalSimpan !== null ? formik.values.tanggalSimpan : "-"}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <KodeKlasifikasi  
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
                            <TipeArsip 
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
                                getImageSize={getImageSize}
                            />
                        </Col>
                    </Row>
                    <Row style={{marginBottom:'-10px'}}>
                        <Col  span={12}>
                            <p className={"ukuranFoto"}>Ukuran Foto : {sizeFoto !== null ? sizeFoto : "-"}</p>
                        </Col>
                        <Col  span={12}>
                            <p className={"kualitasFoto"}>Kualitas Foto : {fotoQuality !== null ? fotoQuality : "-"}</p>
                        </Col>
                        
                    </Row>

                </div>
            </div>
            <div style={{marginTop:'45px'}}>
                <Row style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                    <Col span={23}>
                        <Button 
                            block 
                            onClick={formik.handleSubmit}
                            className={"SaveButton"}
                            disabled={!formik.isValid}
                        >
                            Primary
                        </Button>
                    </Col>
                </Row>
            </div>
            


            
       </Form>
    )
}

export default InputDataForm
