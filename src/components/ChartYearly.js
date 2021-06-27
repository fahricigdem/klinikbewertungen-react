import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {

    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "white", padding: "5px 10px" }} >
                <p className="label" style={{ color: "black" }}>{label} </p>

                <p className="label" style={{ color: "#0DCAF0" }}>{`${payload[1].dataKey} : ${payload[1].value}`} </p>
                <p className="label" style={{ color: "#0C8FA7" }}>{`${payload[0].dataKey} : ${payload[0].value}`} </p>

                <p className="label" style={{ color: "#DC3545" }}>{`${payload[3].dataKey} : ${payload[3].value}`} </p>
                <p className="label" style={{ color: "#9E2631" }}>{`${payload[2].dataKey} : ${payload[2].value}`} </p>
            </div>
        );
    }
    return null;
};



export default class ChartYearly extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';



    render() {

        const dataYearlyRaw = [...this.props.data]
        let datafordiagram = []
        for (let i = 2006; i < 2022; i++) {

            let year = {
                name: i.toString(),
                GooglePositive: 0,
                GoogleNegative: 0,
                KlinikDePositive: 0,
                KlinikDeNegative: 0,
            }

            dataYearlyRaw.map(r => {
                if (r.year === i) {
                    if (r.source === "googleMaps") {
                        if (r.positive) {
                            year.GooglePositive++
                        } else {
                            year.GoogleNegative++
                        }

                    } else {
                        if (r.positive) {
                            year.KlinikDePositive++
                        } else {
                            year.KlinikDeNegative++
                        }
                    }
                }

                return r
            })

            datafordiagram.push(year)
        }

        let weit = window.screen.width - 50;
        let hoch = 350
        if (window.screen.width > 900) {
            hoch = 600;
            weit = (weit - 30) / 2
        }


        return (

            <BarChart
                width={weit}
                height={hoch}
                data={datafordiagram}
                margin={{
                    top: 10,
                    right: 10,
                    left: 1,
                    bottom: 10,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" stroke={this.props.dark ? '#555555' : '#dddddd'} />
                <XAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <YAxis tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="GooglePositive" stackId="a" fill="#0C8FA7" />
                <Bar dataKey="GoogleNegative" stackId="a" fill="#0DCAF0" />
                <Bar dataKey="KlinikDePositive" stackId="b" fill="#9E2631" />
                <Bar dataKey="KlinikDeNegative" stackId="b" fill="#DC3545" />
            </BarChart>

        );
    }
}
