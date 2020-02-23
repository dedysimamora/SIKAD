import React from 'react'
import DocumentCard from "../Components/DocumentCard"
import { Col, Row } from 'antd'

const Dashboard = (props) => {
  
   
    
    return (
        <div>
            <Row gutter={16}>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Personal File"} sortColor={'#0707FF'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Foto"} sortColor={'#BF12C3'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Video"} sortColor={'#FF1C0B'}/>
            </Col>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Surat Masuk"} sortColor={'#FF8C1B'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Surat Keluar"} sortColor={'#001529 '}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Kartografi"} sortColor={'#22D800'}/>
            </Col>
        </Row>
        </div>
    )
}

export default Dashboard
