import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';




const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "white", padding: "5px 10px" }} >
                <p className="label clearfix" style={{ color: "black" }}>{label} </p>
                <p className="label" style={{ color: "#0DCAF0" }}>{`Negative: ${payload[1].value}`}</p>
                <p className="label" style={{ color: "#0C8FA7" }}>{`Positive : ${payload[0].value}`}</p>

            </div>
        );
    }

    return null;
};

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

    render() {
        const dataYearlyRaw = [...this.props.data]
        let datafordiagram = []
        for (let i = 2006; i < 2022; i++) {

            let year = {
                name: i.toString(),
                GooglePositive: 0,
                GoogleNegative: 0,

            }

            dataYearlyRaw.map(r => {
                if (r.year === i) {
                    if (r.source === "googleMaps") {
                        if (r.positive) {
                            year.GooglePositive++
                        } else {
                            year.GoogleNegative++
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

            <AreaChart
                width={weit}
                height={hoch}
                data={datafordiagram}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke={this.props.dark ? '#555555' : '#dddddd'} />
                <XAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <YAxis tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="GooglePositive" stackId="a" stroke="#8884d8" fill="#0C8FA7" />
                <Area type="monotone" dataKey="GoogleNegative" stackId="a" stroke="#8884d8" fill="#0DCAF0" />

            </AreaChart>

        );
    }
}
