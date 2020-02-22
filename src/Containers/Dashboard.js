import React from 'react'
import DocumentCard from "../Components/DocumentCard"
import { Col, Row } from 'antd'

const Dashboard = () => {
    return (
        <Row gutter={16}>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Dokumen"} sortColor={'#EE682A'} />
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Foto"} sortColor={'#291B4F'} />
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Video"} sortColor={'#FCD42B'} />
            </Col>
        </Row>
    )
}

export default Dashboard
