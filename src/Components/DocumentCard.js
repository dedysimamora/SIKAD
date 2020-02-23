import React, {useState} from 'react'
import { Card} from 'antd'
import { useCountUp } from 'react-countup';
import {PieChart, Pie, Sector, Cell } from 'recharts';
  
import "./DocumentCard.css"


const CountNumber = (props) => {
  const { countUp } = useCountUp({ end: props.endNumber, suffix: props.suffix });
  return countUp
};

const DocumentCard = (props) => {

    const data = [
        { name: 'Dokumen', value: 100 },
        { name: 'Foto', value: 300 },
        { name: 'Video', value: 200 }
    ]
    data.sort(function(x,y){ return x.name == props.sortData ? -1 : y.name == props.sortData ? 1 : 0; });
    const Color = ['#EE682A', '#291B4F', '#FCD42B'];
    Color.sort(function(x,y){ return x == props.sortColor ? -1 : y == props.sortColor ? 1 : 0; });


    const renderActiveShape = (props) => {
      const RADIAN = Math.PI / 180;
      const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const sx = cx + (outerRadius + 10) * cos;
      const sy = cy + (outerRadius + 10) * sin;
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
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
            <text style={{fontSize:'12px', fontWeight:500}} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <text style={{fontSize:'55px', fontWeight:700}} width={110} x={innerRadius + 150} y={innerRadius + 25} textAnchor={textAnchor} fill={fill}>{Percentage}</text>
            <text x={innerRadius + 150} y={innerRadius + 45} textAnchor={textAnchor} fill={fill}>Total</text>
            <text x={innerRadius + 185} y={innerRadius + 45} textAnchor={textAnchor} fill={fill}>{TotalArsip}</text>
          </g>
        );
      };

    return (
        <Card className={"DocumentCardContainer"} bordered={true}>
               <PieChart  width={340} height={120}>
                    <Pie
                        data={data}
                        cx={70}
                        cy={55}
                        activeIndex={0}
                        activeShape={renderActiveShape}
                        innerRadius={40}
                        outerRadius={60}
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
