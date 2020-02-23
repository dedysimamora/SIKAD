import React from 'react'
import DocumentCard from "../Components/DocumentCard"
import { Col, Row } from 'antd'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

const Dashboard = (props) => {
  
    const data = [
        {
          name: 'Dokumen', uv: 4000, amt: 2400,
        },
        {
          name: 'Foto', uv: 3000, amt: 2210,
        },
        {
          name: 'Video', uv: 2000, amt: 2290,
        }
      ];

    return (
        <div>
            <Row gutter={16}>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Dokumen"} sortColor={'#EE682A'}  isMobile={props.isMobile}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Foto"} sortColor={'#291B4F'}  isMobile={props.isMobile}/>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <DocumentCard sortData={"Video"} sortColor={'#FCD42B'}  isMobile={props.isMobile}/>
            </Col>
            
        </Row>
        <Row>
            <Col span={24}>

            <BarChart
                width={500}
                height={350}
                data={data}
                margin={{
                top: 25, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
                
            </Col>
        </Row>
        </div>
    )
}

export default Dashboard
