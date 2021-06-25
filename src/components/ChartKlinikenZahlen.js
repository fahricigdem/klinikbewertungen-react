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
import refugeeks from '../images/refugeeks.png'


const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip flex-row" >
                <p className="label clearfix" style={{ backgroundColor: "white", color: "black", padding: "10px 10px" }}>{`${label} : ${payload[0].value}`}  <img src={refugeeks} style={{ height: "20px", verticalAlign: "top" }} /></p>
            </div>
        );
    }
    return null;
};


export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/vertical-composed-chart-w6fni';

    render() {

        const klinikDeData = [...this.props.data]
        const source = this.props.source

        let barColor = "#07AF09"


        source === "klinikDe" && (barColor = "#9E2631")

        source === "googleMaps" && (barColor = "#0C8FA7")


        let datafordiagram = []

        for (let i of KlinikNames) {

            let einKlinik = {
                name: i,
                Zahl: 0,
            }


            let j = 0
            klinikDeData.map(r => {
                if (r.name === i) {
                    j++
                }
                return r
            })

            einKlinik.Zahl = j
            datafordiagram.push(einKlinik)
        }


        datafordiagram.sort((a, b) => (a.Zahl > b.Zahl) ? 1 : -1)


        let weit = window.screen.width - 30;
        let hoch = 550
        if (window.screen.width > 900) {
            hoch = 400;
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
                <YAxis tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} dataKey="name" type="category" scale="band" width={150} style={{ fontSize: "0.9rem", whiteSpace: "nowrap", paddingLeft: "0px" }} />

                <Tooltip content={<CustomTooltip />} />


                <Bar dataKey="Zahl" fill={barColor} />

            </BarChart>

        );
    }
}
