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

import { FachbereichNamesKurz } from '../Data/Lists'


export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {

        const klinikDeData = [...this.props.data].filter(e => e.source === "klinikDe")

        let datafordiagram = []

        for (let i of FachbereichNamesKurz) {

            let einKlinik = {
                name: i,
                zahl: 0,
            }

            let j = 0
            klinikDeData.map(r => {
                if (r.fachbereich === i) {
                    j++
                }
                return r
            })

            einKlinik.zahl = j
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.zahl > b.zahl) ? 1 : -1)


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
                height={hoch * 2}
                data={datafordiagram}
                margin={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                <Tooltip />


                <Bar dataKey="zahl" fill="#413ea0" />

            </BarChart>

        );
    }
}
