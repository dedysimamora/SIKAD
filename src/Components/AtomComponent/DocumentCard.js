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
    let sortTipeARsip = props.allData.reduce((acc, element) => {
      const [key, value] = Object.entries(element)[12];
      if(acc[value] == undefined) {
        acc[value] = 1
      } else {
        acc[value] = acc[value] + 1
      }
      return acc;
    }, {});
    const data = Object.keys(sortTipeARsip).map(key => ({name: key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }), value: Number(sortTipeARsip[key])}));
    data.sort(function(x,y){ return x.name == props.sortData ? -1 : y.name == props.sortData ? 1 : 0; });
    const Color = ['#39589A', '#338984', '#693F7B', '#DA5353', '#FBAE00', '#1F525E'];
    Color.sort(function(x,y){ return x === props.sortColor ? -1 : y === props.sortColor ? 1 : 0; });
    


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
                <text style={{fontSize:'12px', fontWeight:500}} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                <text style={{fontSize:'55px', fontWeight:700}}  x={innerRadius + 115} y={innerRadius + 55} textAnchor={textAnchor} fill={fill}>{Percentage}</text>
                <text x={innerRadius + 120} y={innerRadius + 77} textAnchor={textAnchor} fill={fill}>Total</text>
                <text x={innerRadius + 155} y={innerRadius + 77} textAnchor={textAnchor} fill={fill}>{TotalArsip}</text>
                </React.Fragment>
              )
            }
          </g>
        );
      };

    return (
        <Card className={"DocumentCardContainer"} bordered={true}>
               <PieChart  width={370} height={isMobile ? 125 : 155}>
                    <Pie
                        data={data}
                        cx={isMobile ? 68 : 60}
                        cy={isMobile ? 40 : 75}
                        activeIndex={0}
                        activeShape={renderActiveShape}
                        innerRadius={isMobile ? 30 : 40}
                        outerRadius={isMobile ? 45 : 65}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={Color[index]} />)
                        }
                    </Pie>
                </PieChart>
        </Card>
    )
}

export default DocumentCard
