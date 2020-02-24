import React from 'react'
import DocumentCard from "../Components/DocumentCard"
import { Col, Row } from 'antd'

const Dashboard = (props) => {
  
   
    
    return ( 
        <div style={{marginBottom:'20px'}}> 
            <Row gutter={16}>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Personal File"} sortColor={'#39589A'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Foto"} sortColor={'#338984'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Video"} sortColor={'#693F7B'}/>
            </Col>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Surat Masuk"} sortColor={'#DA5353'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Surat Keluar"} sortColor={'#FBAE00'}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Kartografi"} sortColor={'#1F525E'}/>
            </Col>
        </Row>
        </div>
    )
}

export default Dashboard
