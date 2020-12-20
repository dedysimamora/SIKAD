import React, {useState, useEffect} from 'react'
import { Button , Form, Row, Col, Upload, message  } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import Firebase from  '../../Commons/FirebaseConfig'

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
    const isBase64 = require('is-base64');
    const isMobile = window.innerWidth <= 600
    const dispatch = useDispatch();
    const {formik, setLoadingFunct, action} = props

    const handleSubmit = () => {
        setLoadingFunct(true)
        if(isBase64(formik.values.foto, {allowMime: true})){
            const storage = Firebase.storage()
            const uploadImage = storage.ref(`images/image-${formik.values.noDefinitif}`).putString(formik.values.foto, 'data_url')
            uploadImage.on(
                "state_changed",
                snapshoot => {},
                error => {
                    console.log(error);
                    
                },
                () => {
                    storage
                        .ref("images")
                        .child(`image-${formik.values.noDefinitif}`)
                        .getDownloadURL()
                        .then( url => {
                            formik.setFieldValue('foto', url)
                            formik.handleSubmit()
                        })
                }
            )
        } else {
            formik.handleSubmit()
        }
        
    }

    useEffect(() => {
        dispatch.arsip.getAllArsip();
    }, [])

    // useEffect(() => {
    //     if(AllArsip !== null) {
    //         formik.setFieldValue('noDefinitif', AllArsip.length + 1)
    //     }
    // }, [AllArsip])
  
    return ( 
    <Form layout={"vertical"}>
        <Row style={{width :"100%"}} justify="end">

            {isMobile && 
                (
                    <React.Fragment>

                        <Col md={{span : 12}} xs={{span : 24}} style={{marginBottom : '10px'}} >
                            <Row >
                                <Col  md={{span : 18, offset: 4}} xs={{span : 18,  offset: 3}}>
                                    <Foto 
                                        formik={formik}
                                    />
                                </Col>
                            </Row>
                            
                                <Row style={{marginTop : '20px'}}>
                                    <Col  span={12} style={{flexDirection:'row'}}>
                                        <PanjangFoto 
                                                formik={formik}
                                            />
                                    </Col>
                                    <Col  span={12}  style={{ display:'flex', flexDirection:'row'}}>
                                            <LebarFoto 
                                                formik={formik}
                                            />
                                    </Col>
                                </Row>
                                <Row style={{marginTop : '10px'}}>
                                    <Col  span={24}>
                                        <KualitasFoto formik={formik} />
                                    </Col>
                                </Row>
                        </Col>
                    </React.Fragment>
                )
            }

            <Col md={{span : 12}} xs={{span : 24}}>
                   {
                       !isMobile && 
                       (
                        <Row style={{marginBottom:'10px'}}>
                            <Col span={12}>
                                <p className={"noDefinitif"}>No Definitif : {formik.values.noDefinitif !== "" ? formik.values.noDefinitif : <span>-</span>}</p>
                            </Col>
                         </Row>
                       )
                   }
                    <Row gutter={16}>
                        <Col md={{span : 8}} xs={{span : 24}}>
                            <NoKlasifikasi  
                                formik={formik}
                            />
                        </Col>
                        <Col md={{span : 8}} xs={{span : 24}}>
                            <TanggalSimpan 
                                formik={formik}
                            />
                        </Col>
                        <Col md={{span : 8}} xs={{span : 24}}>
                            <TipeArsip 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={{span : 12}} xs={{span : 24}}>
                            <HakCipta 
                                formik={formik}
                            />
                        </Col>
                        <Col md={{span : 12}} xs={{span : 24}}>
                            <LokasiTempat 
                                formik={formik}
                            />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={{span : 12}} xs={{span : 24}}>
                            <Keterangan 
                                formik={formik}
                            />
                        </Col>
                        <Col md={{span : 12}} xs={{span : 24}}>
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
                    
            </Col>

            {
                    !isMobile && 
            <React.Fragment>

            <Col md={{span : 12}} xs={{span : 24}} >
                <Row >
                    <Col  md={{span : 18, offset: 4}} xs={{span : 18,  offset: 3}}>
                        <Foto 
                            formik={formik}
                        />
                    </Col>
                </Row>
                
                    <Row style={{marginBottom:'-10px', marginTop:'10px'}}>
                        <Col span={4} offset={3}>
                            <p style={{marginTop:'5px', fontSize : '12px'}}>Ukuran Foto :</p>
                        </Col>
                        <Col  span={3} style={{flexDirection:'row'}}>
                            <PanjangFoto 
                                    formik={formik}
                                />
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'3px', marginLeft:'-40px'}}>Cm</p>
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'3px', marginLeft:'-25px'}}>X</p>
                        </Col>
                        <Col  span={3}  style={{ display:'flex', flexDirection:'row'}}>
                                <LebarFoto 
                                    formik={formik}
                                />
                        </Col>
                        <Col  span={1} style={{flexDirection:'row'}}>
                            <p style={{marginTop:'3px', marginLeft:'-40px'}}>Cm</p>
                        </Col>
                        <Col  span={6}>
                            <KualitasFoto formik={formik} />
                        </Col>
                    
                     </Row>
                
            
            </Col>
        </React.Fragment>
        }


            

        </Row>
        <Row style={{marginTop:'25px'}}>
            <Col md={{span : 24}} xs={{span : 24}}>
                <Button 
                    block 
                    onClick={handleSubmit}
                    className={"SaveButton"}
                    disabled={!formik.isValid}
                >
                    {action == "inputData" ? "Unggah Data" : "Ubah Data"}
                </Button>
            </Col>
        </Row>
    </Form>
    )
}

export default InputDataForm
