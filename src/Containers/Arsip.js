import React, {useState, useEffect} from 'react'
import { Table, Divider, Icon } from 'antd';
import DataSample from "../Commons/dataSample"

import './Arsip.css'

const columns = [
    {
      title : "No",
      dataIndex : "noDefiatif",
      width : "3%",
      align : "center",
      sorter: (a, b) => a.noDefiatif - b.noDefiatif
    },
    {
      title : "Kode Klasifikasi",
      dataIndex : "kodeKlasifikasi",
      width : "7%",
      align : "center",
      render : (a) => a.toLocaleString('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}),
      sorter: (a, b) => a.kodeKlasifikasi - b.kodeKlasifikasi
    },
    {
      title : "Indeks",
      dataIndex : "indeks",
      width : "10%",
      align : "center"
    },
    {
      title : "Uraian Informasi",
      dataIndex : "tipeArsip",
      width : "20%",
      align : "center"
    },
    {
      title : "Tempat Simpan",
      dataIndex : "tempatSimpan",
      width : "7%",
      align : "center"
    },
    {
      title : "Tanggal Simpan",
      dataIndex : "tanggalSimpan",
      width : "7%",
      align : "center"
    },
    {
      title: 'Action',
      key: 'action',
      width : "5%",
      align : "center",
      render: () => (
        <span>
          <Icon  type="download" style={{marginLeft: "-8px"}}  className={"actionLogo"}/>
          <Icon theme="filled" type="edit"  className={"actionLogo"}/>
          <Icon theme="filled" type="delete"  className={"actionLogo"}/>
        </span>
      ),
    },


   
    // {
    //   title: 'Name',
    //   dataIndex: 'name',
    //   filters: [
    //     {
    //       text: 'Joe',
    //       value: 'Joe',
    //     },
    //     {
    //       text: 'Jim',
    //       value: 'Jim',
    //     }
    //   ],
    //   // specify the condition of filtering result
    //   // here is that finding the name started with `value`
    //   onFilter: (value, record) => record.name.indexOf(value) === 0,
    //   sorter: (a, b) => a.name.length - b.name.length,
    //   sortDirections: ['descend'],
    // },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b) => a.age - b.age,
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   filters: [
    //     {
    //       text: 'London',
    //       value: 'London',
    //     },
    //     {
    //       text: 'New York',
    //       value: 'New York',
    //     },
    //   ],
    //   filterMultiple: false,
    //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ['descend', 'ascend'],
    // },
  ];
  
 


const Arsip = (props) => {
    const {match} = props
    const [pagination, setPagination] = useState({})
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        if(match.params.type == undefined) {
          setData(DataSample)
        } else {
          // arsipType = match.params.type.split("-").join("")
          let filterData = DataSample.filter(data => data.tipeArsip.toLowerCase() == match.params.type.split("-").join(""))
          setData(filterData)
        }
     
    }, [match.params])

    
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }
    return data !== null && (
        <Table
            className="arsip-table"
            columns={columns} 
            dataSource={data} 
            onChange={onChange} 
            bordered={true}
            pagination={
                {
                  // itemRender: customPagination,
                  pageSize: 12,
                  total: DataSample.length,
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
    )
}

export default Arsip






// {
//   "noDefiatif" : 1,
//   "kodeKlasifikasi" : 555.222,
//   "indeks" : "SOSIALISASI",
//   "hakCipta" : "UMPEG",
//   "uraianInformasi" : "SAMBUTAN",
//   "tempatSimpan" : "KLATEN",
//   "tanggalSimpan" : "7/26/1999",
//   "kualitas" : "BAIK",
//   "warna" : "BERWARNA",
//   "ukuran" : "4R",
//   "keterangan" : "ANONIM",
// }