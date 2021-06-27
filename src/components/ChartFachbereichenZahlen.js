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
import { FachbereichNamesKurz_eng } from '../Data/Lists'

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "white" }}>

                <p className="label " style={{ color: "#DC3545", padding: "5px 10px" }}>{`${label} : ${payload[0].value}`} </p>
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

        for (let i = 0; i < FachbereichNamesKurz.length; i++) {
            let einKlinik
            {
                this.props.english ?
                einKlinik = {
                    name: FachbereichNamesKurz_eng[i],
                    zahl: 0,
                }
                :
                einKlinik = {
                    name: FachbereichNamesKurz[i],
                    zahl: 0,
                }
            }



            let j = 0
            klinikDeData.map(r => {
                if (r.fachbereich === FachbereichNamesKurz[i]) {
                    j++
                }
                return r
            })

            einKlinik.zahl = j
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.zahl > b.zahl) ? 1 : -1)


        let weit = window.screen.width - 50;
        let hoch = 550
        if (window.screen.width > 900) {
            hoch = 600;
            weit = (weit - 30)
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
                <CartesianGrid stroke={this.props.dark ? '#333333' : '#dddddd'} />
                <XAxis type="number" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <YAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                <Tooltip content={<CustomTooltip />} />


                <Bar dataKey="zahl" fill="#DC3545" />

            </BarChart>

        );
    }
}
