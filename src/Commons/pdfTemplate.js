import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import HelperFunction from "../Commons/HelperFunction";
import SampleImage from "../Assets/Images/sample.jpg";
import PdfBackground from "../Assets/Images/pdfBackground.png";
import PoppinsBold from "../Assets/Font/Poppins-Bold.ttf";
import PoppinsMedium from "../Assets/Font/Poppins-Medium.ttf";
import DynamicData from "../DynamicData";

const PdfTemplate = (props) => {
  const { data, webType } = props;
  const [imageData, SetImageData] = useState(null);

  Font.register({
    family: "Poppins",
    fonts: [{ src: PoppinsBold }, { src: PoppinsMedium, fontStyle: "thin" }],
  });

  return (
    <Document>
      <Page
        size="A4"
        style={{ flexDirection: "column", backgroundColor: "#EEEEEE" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 445,
            backgroundColor: "#EEEEEE",
          }}
        >
          <View
            style={{
              width: "70%",
              height: "60%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.foto ? (
              <View>
                <Image
                  style={{ width: "85%", position: "absolute" }}
                  src={data.foto !== null ? data.foto : ""}
                />
              </View>
            ) : (
              <View>
                <Text
                  style={{
                    fontSize: 7,
                    fontFamily: "Poppins",
                    fontStyle: "thin",
                    color: "#001529",
                  }}
                >
                  No Picture
                </Text>
              </View>
            )}
          </View>
        </View>
        {/* <Image
          style={{ width: "100%", height: "100%", position: "absolute" }}
          src={PdfBackground}
        /> */}
        <View style={{}}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "Poppins",
              color: `${DynamicData[webType].color.pdfColor.main}`,
              marginLeft: 120,
              marginTop: -20,
            }}
          >
            Detail Arsip
          </Text>
        </View>

        <View
          style={{
            height: 4,
            backgroundColor: `${DynamicData[webType].color.pdfColor.main}`,
            marginLeft: 120,
            marginRight: 200,
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginLeft: 120,
          }}
        >
          {DynamicData[webType].column.map((e) => (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "45%",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: "Poppins",
                  fontStyle: "thin",
                  color: `${DynamicData[webType].color.pdfColor.main}`,
                }}
              >
                {e.title}
              </Text>
              <Text
                style={{
                  fontSize: data[e.dataIndex].length > 20 ? 10 : 20,
                  fontFamily: "Poppins",
                  color: `${DynamicData[webType].color.pdfColor.second}`,
                }}
              >
                {data[e.dataIndex]}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            position: "absolute",
            alignItems: "center",
            backgroundColor: `${DynamicData[webType].color.pdfColor.main}`,
            height: "400ppx",
            width: "17%",
            bottom: 0,
            left: 0,
          }}
        ></View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${DynamicData[webType].color.pdfColor.second}`,
            height: "23px",
            bottom: 0,
          }}
        >
          <Text style={{ fontSize: 9, color: "white" }}>
            {`Dokumen ini dibuat seacara otomatis oleh ${DynamicData[webType].subTitle}`}
          </Text>
        </View>

        {/* <View style={{display: 'flex', flexDirection:'column', marginTop:20}}>
                        <Text style={{fontSize:7, fontFamily:'Poppins', fontStyle:'thin', color:'#001529', marginLeft: 120,}}>Nomor Klarifikasi : </Text>
                        <Text style={{fontSize:30, fontFamily:'Poppins',fontStyle:'thin', color:'#1A74BC', marginLeft: 120, marginTop: -5 }}>349543</Text>
                </View> */}
      </Page>
    </Document>
  );
};

export default PdfTemplate;
