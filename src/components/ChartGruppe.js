import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';



export default class ChartGruppe extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';



    render() {

        const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#0088FE'];

        const RADIAN = Math.PI / 180;

        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 1.08;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill={this.props.dark ? "#dddddd" : "#555555"} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        let weit = window.screen.width - 155;
        if (window.screen.width > 900) {
            weit = 300;
        }

        return (

            <PieChart width={weit + 40} height={weit}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={this.props.data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={weit / 3}
                    fill="#8884d8"
                >
                    {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>

        );
    }
}








