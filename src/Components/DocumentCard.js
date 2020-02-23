import React, {useState, useEffect} from 'react'
import { Card} from 'antd'
import { useCountUp } from 'react-countup';
import {PieChart, Pie, Sector, Cell } from 'recharts';
  
import "./DocumentCard.css"


const CountNumber = (props) => {
  const { countUp } = useCountUp({ end: props.endNumber, suffix: props.suffix });
  return countUp
};



const DocumentCard = (props) => {
    const isMobile = window.innerWidth <= 600
    const data = [
        { name: 'Personal File', value: 125 },
        { name: 'Foto', value: 278 },
        { name: 'Video', value: 79 },
        { name: 'Surat Masuk', value: 178 },
        { name: 'Surat Keluar', value: 110 },
        { name: 'Kartografi', value: 223 }
    ]
    data.sort(function(x,y){ return x.name == props.sortData ? -1 : y.name == props.sortData ? 1 : 0; });
    const Color = ['#0707FF', '#BF12C3', '#FF1C0B', '#FF8C1B', '#001529 ', '#22D800'];
    Color.sort(function(x,y){ return x == props.sortColor ? -1 : y == props.sortColor ? 1 : 0; });


    const renderActiveShape = (props) => {
      
      const RADIAN = Math.PI / 180;
      const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
      } = props;
      const cos = Math.cos(-RADIAN * midAngle);
      const textAnchor = cos >= 0 ? 'start' : 'end';
      let Percentage = <CountNumber endNumber={(percent * 100).toFixed(2)} suffix=" %" />
      let TotalArsip = <CountNumber endNumber={value} suffix=" Arsip" />
      
      
      
        return  (
          <g>
           
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />

            {
              isMobile ? (
                <React.Fragment>
                <text style={{fontSize:'9px', fontWeight:500}} x={cx} y={cy + 3} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <text style={{fontSize:'9px', fontWeight:700}}  x={cx - 8 } y={cy - 3} textAnchor={textAnchor} fill={fill}>{Percentage}</text>
                <text style={{fontSize:'14px', fontWeight:500}} x={innerRadius -5 } y={innerRadius + 85} textAnchor={textAnchor} fill={fill}>Total</text>
                <text style={{fontSize:'14px', fontWeight:500}} x={innerRadius + 30} y={innerRadius + 85} textAnchor={textAnchor} fill={fill}>{TotalArsip}</text>
                </React.Fragment>
              ) : 
              (
                <React.Fragment>
                <text style={{fontSize:'18px', fontWeight:500}} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <text style={{fontSize:'55px', fontWeight:700}}  x={innerRadius + 130} y={innerRadius + 55} textAnchor={textAnchor} fill={fill}>{Percentage}</text>
                <text x={innerRadius + 130} y={innerRadius + 77} textAnchor={textAnchor} fill={fill}>Total</text>
                <text x={innerRadius + 165} y={innerRadius + 77} textAnchor={textAnchor} fill={fill}>{TotalArsip}</text>
                </React.Fragment>
              )
            }
          </g>
        );
      };

    return (
        <Card className={"DocumentCardContainer"} bordered={true}>
               <PieChart  width={340} height={isMobile ? 125 : 200}>
                    <Pie
                        data={data}
                        cx={isMobile ? 68 : 75}
                        cy={isMobile ? 40 : 95}
                        activeIndex={0}
                        activeShape={renderActiveShape}
                        innerRadius={isMobile ? 30 : 60}
                        outerRadius={isMobile ? 45 : 80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={Color[index % Color.length]} />)
                        }
                    </Pie>
                </PieChart>
        </Card>
    )
}

export default DocumentCard
