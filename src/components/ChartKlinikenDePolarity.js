import React, { PureComponent } from 'react';
import {
    ComposedChart,
    BarChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { KlinikNames } from '../Data/Lists'

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "white" }}>

                <p className="label " style={{ color: "#9E2631", padding: "5px 10px" }}>{`${label} : ${payload[0].value}`} </p>
            </div>
        );
    }
    return null;
};

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {

        const klinikDeData = [...this.props.data].filter(e => e.source === "klinikDe")

        let datafordiagram = []

        for (let i of KlinikNames) {

            let einKlinik = {
                name: i,
                PolarityMean: 0,
            }


            let j = 0
            klinikDeData.map(r => {
                if (r.name === i) {
                    einKlinik.PolarityMean = einKlinik.PolarityMean + r.polarity
                    j++
                }
                return r
            })

            einKlinik.PolarityMean = (einKlinik.PolarityMean / j).toFixed(3)
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.PolarityMean > b.PolarityMean) ? 1 : -1)


        let weit = window.screen.width - 30;
        let hoch = 550
        if (window.screen.width > 900) {
            hoch = 600;
            weit = (weit - 30) / 2
        }
        return (

            <BarChart
                layout="vertical"
                width={weit}
                height={hoch * 1.2}
                data={datafordiagram}
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke={this.props.dark ? '#333333' : '#dddddd'} />
                <XAxis type="number" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} domain={[-1, +1]} />
                <YAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                <Tooltip content={<CustomTooltip />} />


                <Bar dataKey="PolarityMean" fill="#9E2631" />

            </BarChart>

        );
    }
}
