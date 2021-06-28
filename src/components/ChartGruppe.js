import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';



export default class ChartGruppe extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';



    render() {

        const getIntroOfPage = (label) => {
            if (label === 'Gruppe-1') {
                return "Gr-1"
            }
            if (label === 'Gruppe-2') {
                return "Gr-2"
            }
            if (label === 'Gruppe-3') {
                return "Gr-3"
            }
            if (label === 'Gruppe-4') {
                return "Gr-4"
            }
            return '';
        };


        const CustomTooltip = ({ active, payload, label }) => {
            if (active) {

                return (
                    <div className="custom-tooltip flex-row" >
                        <p className="label" style={{ backgroundColor: "#ffffff", color: "black", padding: "4px 6px" }}>
                            {`${getIntroOfPage(payload[0].name)} : ${payload[0].value}`}
                        </p>
                        {this.props.klinik === "Alle" &&
                            <span style={{ backgroundColor: "rgba(255, 255, 255, 0.5) ", color: "black" }}>
                                {

                                    getIntroOfPage(payload[0].name) === "Gr-1" ?

                                        "Eilenriede, St.Martini, Zuckerberg, Sophienklinik, Winsen"

                                        : getIntroOfPage(payload[0].name) === "Gr-2" ?

                                            "Wahrendorff, AMEOS Seepark, KRH Agness, AMEOS Hildesheim, Bucholz, Herzogin, HELIOS Cuxhafen, Peine, Helios Mittelwesser"

                                            : getIntroOfPage(payload[0].name) === "Gr-3" ?
                                                "DIAKOVERE Henr., Wolfsburg"
                                                :
                                                "Lüneburg (Psych)"
                                } </span>}

                    </div>
                )
            }
            return null;
        };

        const getIntroOfGroup = (label) => {
            if (label === 'Gruppe-1') {
                return "Gr-1"
            }
            if (label === 'Gruppe-2') {
                return "Gr-2"
            }
            if (label === 'Gruppe-3') {
                return "Gr-3"
            }
            if (label === 'Gruppe-4') {
                return "Gr-4"
            }
            return '';
        };

        const renderLegend = (props) => {
            const { payload } = props;

            return (
                <div style={{ display: 'flex', justifyContent: "center", gap: '1em' }}>
                    {
                        payload.map((entry, index) => (

                            <div style={{ color: entry.color }}>
                                {getIntroOfGroup(entry.value)}
                            </div>
                        ))
                    }
                </div>
            );
        }



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

        let weit = window.screen.width * 0.8;
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
                <Legend content={renderLegend} />
                <Tooltip content={<CustomTooltip />} />
            </PieChart>

        );
    }
}









