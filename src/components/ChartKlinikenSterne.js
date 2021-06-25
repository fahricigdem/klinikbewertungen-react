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

                <p className="label " style={{ color: "#0C8FA7", padding: "5px 10px" }}>{`${label} : ${payload[0].value.toPrecision(3)}`} </p>
            </div>
        );
    }
    return null;
};

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {

        const googleMapsData = [...this.props.data].filter(e => e.source === "googleMaps")

        let datafordiagram = []

        for (let i of KlinikNames) {

            let einKlinik = {
                name: i,
                SterneMean: 0,
            }


            let j = 0
            googleMapsData.map(r => {
                if (r.name === i) {
                    einKlinik.SterneMean = einKlinik.SterneMean + r.sterne
                    j++
                }
                return r
            })

            einKlinik.SterneMean = einKlinik.SterneMean / j
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.SterneMean > b.SterneMean) ? 1 : -1)


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
                <XAxis ticks={[0, 1, 2, 3, 4, 5]} type="number" domain={[0, 5]} tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <YAxis dataKey="name" type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />

                <Tooltip content={<CustomTooltip />} />


                <Bar dataKey="SterneMean" fill="#0C8FA7" />

            </BarChart>

        );
    }
}
