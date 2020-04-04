import React, {useState, useEffect} from 'react'
import DocumentCard from "../Components/AtomComponent/DocumentCard"
import { Col, Row, Modal, Spin } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Loader from 'react-loader-spinner'
import "./Dashboard.css";

const Dashboard = (props) => {
    const dispatch = useDispatch();
    const [loading, SetLoading] = useState(false)
    const AllArsip = useSelector(state => state.arsip.data);

    useEffect(() => {
        dispatch.arsip.getAllArsip();
    }, [])
    
    return ( AllArsip !== null ? 
        (<div style={{marginBottom:'20px'}}> 
            <Row gutter={16}>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/personal-file'}}>
                    <DocumentCard allData={AllArsip} sortData={"Personal File"} sortColor={'#39589A'}/>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/foto'}}>
                    <DocumentCard allData={AllArsip} sortData={"Foto"} sortColor={'#338984'}/>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/video'}}>
                    <DocumentCard allData={AllArsip} sortData={"Video"} sortColor={'#693F7B'}/>
                </Link>
            </Col>
            <Col  xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/surat-masuk'}}>
                    <DocumentCard allData={AllArsip} sortData={"Surat Masuk"} sortColor={'#DA5353'}/>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/surat-keluar'}}>
                    <DocumentCard allData={AllArsip} sortData={"Surat Keluar"} sortColor={'#FBAE00'}/>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
                <Link to={{pathname : '/sikad/arsip/kartografi'}}>
                    <DocumentCard allData={AllArsip} sortData={"Kartografi"} sortColor={'#1F525E'}/>
                </Link>
            </Col>
        </Row>
        </div>) : 
        (<div className="sweet-loading">
            <Loader
                type="Puff"
                color="#001529"
                height={100}
                width={100}
            />
        </div>)
    )
}

export default Dashboard
