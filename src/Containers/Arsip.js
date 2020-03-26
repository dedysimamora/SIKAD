import React, {useState, useEffect} from 'react'
import { Table, Divider, Icon, Modal, Row, Col, Input, Button, Tooltip    } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
// import DataSample from "../Commons/dataSample"
import HelperFunction from "../Commons/HelperFunction"
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Firebase from  '../Commons/FirebaseConfig'
import ModalLoading from "../Components/HelperComponent/ModalLoading"
import PdfTemplate from "../Commons/pdfTemplate"
import ModalClick from "../Components/HelperComponent/ModalClick"
import { pdf } from "@react-pdf/renderer";
import FileSaver from "file-saver";
import ReactExcelExport from "../Commons/EcelExport"




import './Arsip.css'

const Arsip = (props) => {
    const isMobile = window.innerWidth <= 600 
    const isMobileLandscape = window.innerWidth <= 900
    const {match} = props
    const { Search } = Input;
    const dispatch = useDispatch();
    const AllArsip = useSelector(state => state.arsip.data);
    const [pagination, setPagination] = useState({})
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [searchTerm, setSearchTerm] = useState(null)
    const [searchData, setSearchData] = useState(null)
    const [modal, setModal] = useState({
      visible : false,
      title : "",
      image : "",
      mainButton : "",
      secondaryButton : ""
  })

  

  const deleteConfirmation = (arsipId, noDefnitif) => {
      setModal({
          visible : true,
          title : `Apakah Anda Yakin Akan Menghapus Arsip :  ${noDefnitif} `,
          image : "question",
          mainButton : {
              title : 'Ok',
              onClick : () => {deleteFunction(arsipId, noDefnitif)}
          },
          secondaryButton : {
            title : 'No',
            onClick : () => {closeModal()}
        }
      })
  }

  const deleteFunction = (arsipId, noDefnitif) =>{

    setModal({
      ...modal,
      visible: false
    })
    
    setLoading(true)
    let db = Firebase.firestore()
    db.collection('arsip').doc(arsipId).delete()
    .then((snapshot) => {
       (async () => {
        await setLoading(false)
        await setModal({
            visible : true,
            title : `Berhasil Menghapus Data Arsip ${noDefnitif}`,
            image : "success",
            mainButton : {
                title : 'Ok',
                onClick : () => {window.location.href = "/dashboard";}
            }
        })
        })()
    })
  }

  const filterData = (e) => {
      setSearchTerm(e.target.value)
    
  }

  useEffect(() => {
    if(data !== null) {
      const results = data.filter(arsip =>
        arsip.uraianInformasi.toLowerCase().includes(searchTerm)
        );
        setSearchData(results);
    }
  }, [searchTerm])

  useEffect(() => {
    if(AllArsip !== null){
      if(match.params.type == undefined) {
        setData(AllArsip)
        setSearchData(AllArsip)
      } else {
        let filterData = AllArsip.filter(data => data.tipeArsip.toLowerCase() == match.params.type.split("-").join(""))
        setData(filterData)
        setSearchData(filterData)
      }
    } else {
      window.location.href = "/dashboard"
    }
    
 
}, [match.params])

  const GeneratePDF = (arsipData) => {
   
                pdf(<PdfTemplate data={arsipData} />)
                .toBlob()
                .then(finalPDFData => {
                    FileSaver.saveAs(finalPDFData, `asd.pdf`);
                })
                .catch(err => {
                    setModal({
                      visible : true,
                      title : 'Gagal Saat Mengunduh Dokumen',
                      image : "failed",
                      mainButton : {
                          title : 'Ok',
                          onClick : () => {closeModal()}
                      }
                  })
                    
                });
            
        
  }
  
  const columns = [
      {
        title : "No",
        dataIndex : "noDefinitif",        align : "center",
        sorter: (a, b) => a.noDefinitif - b.noDefinitif
      },
      {
        title : "Kode Klasifikasi",
        dataIndex : "noKlasifikasi",
        align : "center",
        render : (a) => a.toLocaleString('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}),
        sorter: (a, b) => a.noKlasifikasi - b.noKlasifikasi
      },
      {
        title : "Indeks",
        dataIndex : "indeks",
        align : "center"
      },
      {
        title : "Uraian Informasi",
        dataIndex : "uraianInformasi",
        align : "center",
      },
      {
        title : "Lokasi",
        dataIndex : "lokasiTempat",
        align : "center"
      },
      {
        title : "Tanggal",
        dataIndex : "tanggalSimpan",
        align : "center"
      },
      {
        title: 'Action',
        key: 'action',
        align : "center",
        render: (text, record) => (
          <span>
             <span onClick={() => {GeneratePDF(record)}}>
                <Icon  type="download"   className={isMobileLandscape ? "actionLogo-mobile" :"actionLogo"}/>
            </span>
             <Link to={{pathname : `/ubah-data/${record.arsipId}`}}>
                <Icon theme="filled" type="edit"  className={isMobileLandscape ? "actionLogo-mobile" :"actionLogo"}/>
             </Link>
             <span onClick={() => {deleteConfirmation(record.arsipId, record.noDefnitif)}}>
                <Icon theme="filled" type="delete"  className={isMobileLandscape ? "actionLogo-mobile" :"actionLogo"}/>
            </span>
          </span>
        ),
      },
    ];

    
  const  onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
  }

  const closeModal = () => {
      setModal({
          ...modal,
          visible : false
      })
  }
    return data !== null && (
      <React.Fragment>
        <Row style={{marginBottom: "25px"}}>
            <Col md={{span : 3, offset: 15}} xs={{span : 8, offset:4}} >
                <ReactExcelExport data={searchData} fileName={match.params.type !== undefined ? ` - ${HelperFunction.Capitalize(match.params.type)}` : ""} />
            </Col>
            <Col  md={{span : 5}} xs={{span : 12}}  >
              <Input
                placeholder="cari arsip"
                suffix={
                  <Tooltip title="Extra information">
                    <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
                onChange={filterData}
                style={{ width: "100%", marginLeft : isMobile ? '10px' : '30px' }}
              />
            </Col>
        </Row>
        {
          isMobile ? (
            <p>Tabel Hanya Bisa Dilihat Dengan Resolusi Layar Minimal 600 pixel</p>

          ) : (
            <React.Fragment>

                <Row>
                    <Col  md={{span : 24}} xs={{span : 24}}>
                          <Table
                          className={isMobileLandscape ? "arsip-table-mobile" :"arsip-table"}
                          columns={columns} 
                          dataSource={searchData} 
                          onChange={onChange} 
                          bordered={true}
                          pagination={
                              {
                                // itemRender: customPagination,
                                pageSize: 12,
                                total: searchData.length,
                                // current: forPagination,
                                style: {
                                    textAlign: 'center',
                                    float: 'none',
                                    marginTop: 47
                                }
                            }
                          }
                          size="small"
                      />
                    </Col>

                </Row>
            </React.Fragment>
          )
        }
        
        <ModalClick 
          title = {modal.title}
          image = {modal.image} 
          mainButton = {modal.mainButton} 
          secondaryButton={modal.secondaryButton}
          visible = {modal.visible}
        />
        <ModalLoading visible={loading} />
      </React.Fragment>
    )
}

export default Arsip