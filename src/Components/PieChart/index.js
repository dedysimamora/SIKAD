import React, {useState, useEffect} from 'react'
import {
    ResponsiveContainer, PieChart, Pie, Sector, Cell
  } from 'recharts';



const PieChartComponent = (props) => {
    const isMobile = window.innerWidth <= 600 
    const [activeIndex, setActiveIndex] = useState(0)
    let sortTipeARsip = props.data.reduce((acc, element) => {
      const [key, value] = Object.entries(element)[12];
      if(acc[value] == undefined) {
        acc[value] = 1
      } else {
        acc[value] = acc[value] + 1
      }
      return acc;
    }, {});
    const data = Object.keys(sortTipeARsip).map(key => ({name: key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }), value: Number(sortTipeARsip[key])}));
    const Color = ['#001529', '#01264a', '#02396f', '#0059af', '#007cef', '#1890ff'];

     
     const onPieEnter = (data, index) => {
        setActiveIndex(index)
      };


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
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill={fill}>{`${(percent * 100).toFixed(2)}%`}</text>
            <Sector
              cx={cx}
              cy={cy}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
            />
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
          </g>
        );
      };
      
       
    return (
        <div style={{ width: '100%', height: 300, marginBottom: isMobile ? "-70px" : "0px" }}>
            <ResponsiveContainer>
                <PieChart width={500} height={400}>
                    <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx={isMobile ? 100 : 180}
                    cy={isMobile ? 100 : 150}
                    innerRadius={isMobile ? 60 : 90}
                    outerRadius={isMobile ? 80 : 120}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    >
                    {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={Color[index]} />)
                    }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartComponent
