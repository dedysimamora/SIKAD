import React, {useState} from 'react'
import { Card} from 'antd'
import CountUp from 'react-countup';
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';
  
import "./DocumentCard.css"

const DocumentCard = (props) => {

    const [animation, setAnimation] = useState(false)

    const endAnimation = (props) => {
        console.log(props, "<<<<<<<<<<<<<");
        setAnimation(true)
        
    }

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

            

            <text style={{fontSize:'40px', fontWeight:700}} width={70} x={innerRadius + 135} y={innerRadius + 40} textAnchor={textAnchor} fill={fill}>{`${(percent * 100).toFixed(2)}%`}</text>
            <text x={innerRadius + 140} y={innerRadius + 60} textAnchor={textAnchor} fill={fill}>{`Total ${payload.name} ${value}`}</text>
            
          </g>
        );
      };

    return (
        <Card className={"DocumentCardContainer"} bordered={true}>
               <PieChart  width={340} height={150}>
                    <Pie
                        data={data}
                        cx={70}
                        cy={70}
                        activeIndex={0}
                        activeShape={renderActiveShape}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        onAnimationEnd={endAnimation}
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
