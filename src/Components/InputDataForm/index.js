import React from 'react'
import { Button , Form, Row, Col } from "antd";

import TempatSimpan from "./tempatSimpan"
// import Hakcipta from "./Hakcipta"
// import Keterangan from "./keterangan"
// import KodeKlasifikasi from "./kodeKlasifikasi"
// import Indeks from "./indeks"
// import Kualitas from "./kualitas"
// import LokasiTempat from "./lokasiTempat"
// import TanggalSimpan from "./tanggalSimpan"
// import NoDefiatif from "./noDefiatif"
// import TipeArsip from "./tipeArsip"
// import UraianInformasi from "./uraianInformasi"
// import Ukuran from "./ukuran"
// import Foto from "./foto"

import "./InputDataForm.css"


const InputDataForm = () => {
    return (
        <Form layout={"vertical"}>
            <Row>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
            </Row>


            <Row>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
                <Col span={8}>
                    <TempatSimpan />
                </Col>
            </Row>

            <Row style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                <Col span={23}>
                    <Button block className={"SaveButton"}>
                         Primary
                    </Button>
                </Col>
            </Row>


            
       </Form>
    )
}

export default InputDataForm
