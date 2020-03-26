import React from 'react'
import PDFTemplate from "../Commons/pdfTemplate"
import {Row, Col, Form} from "antd"
import { PDFViewer } from '@react-pdf/renderer';

const Profile = () => {
    return (
<Form layout={"vertical"}>
        <Row style={{height : 500, backgroundColor:'red'}} >
            <Col span={12} order={5} style={{height:'100%', backgroundColor:'green'}} >
            
            </Col>
            <Col span={12} order={7} style={{height:'100%', backgroundColor:'blue'}} >
                
            
            </Col>
        </Row>
        </Form>
        
    )
}

export default Profile
