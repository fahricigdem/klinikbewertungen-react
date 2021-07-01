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

                <p className="label " style={{ color: "#9E2631", padding: "5px 10px" }}>{`${label} : ${payload[0].value.toPrecision(3)}`} </p>
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
                GesamtMean: 0,
            }


            let j = 0
            klinikDeData.map(r => {
                if (r.name === i) {
                    einKlinik.GesamtMean = einKlinik.GesamtMean + r.gesamt
                    j++
                }
                return r
            })

            einKlinik.GesamtMean = einKlinik.GesamtMean / j

            einKlinik.GesamtMean && datafordiagram.push(einKlinik)

        }


        datafordiagram.sort((a, b) => (a.GesamtMean > b.GesamtMean) ? 1 : -1)


        let weit = window.screen.width - 50;
        let hoch = 30 + (30 * datafordiagram.length)
        if (window.screen.width > 900) {
            hoch = 30 + (30 * datafordiagram.length)
            weit = (weit - 30) / 2
        }
        return (
            <div style={{ width: '98%', height: hoch * 1.2 }}>
                <ResponsiveContainer >
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
                        <XAxis type="number" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} domain={[0, 100]} />
                        <YAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                        <Tooltip content={<CustomTooltip />} />


                        <Bar dataKey="GesamtMean" fill="#9E2631" />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
