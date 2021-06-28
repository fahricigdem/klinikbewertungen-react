import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';




export default class ChartResult extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';



    render() {


        const getIntroOfPage = (label) => {
            if (label === 'Positive') {
                return this.props.english ? "Positive" : "Positiv"
            }
            if (label === 'Negative') {
                return this.props.english ? "Negative" : "Negativ"
            }
            return '';
        };


        const CustomTooltip = ({ active, payload, label }) => {
            if (active) {

                return (
                    <div className="custom-tooltip flex-row" >
                        <p className="label" style={{ backgroundColor: "white", color: "black", padding: "10px 10px" }}>



                            {`${getIntroOfPage(payload[0].name)} : ${payload[0].value}`}


                        </p>
                    </div>
                );
            }
            return null;
        };






        let COLORS = ['#07AF09', '#00F400'];
        const source = this.props.source

        source === "klinikDe" && (COLORS = ['#9E2631', '#DC3545'])

        source === "googleMaps" && (COLORS = ['#0C8FA7', '#0DCAF0'])


        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };

        let weit = window.screen.width * 0.8;
        if (window.screen.width > 900) {
            weit = 300;
        }

        return (

            <PieChart width={weit} height={weit}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={this.props.data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={weit / 2.8}
                    fill="#8884d8"
                >
                    {this.props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip content={<CustomTooltip />} />
            </PieChart>

        );
    }
}








