import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomTooltip = ({ active, payload, label }) => {

    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: "white", padding: "5px 10px" }} >
                <p className="label " style={{ color: "black" }}>{label} </p>
                <p className="label " style={{ color: "#9E2631" }}>{`${payload[0].dataKey} : ${payload[0].value}`} </p>
                <p className="label " style={{ color: "#0C8FA7" }}>{`${payload[1].dataKey} : ${payload[1].value}`} </p>

            </div>
        );
    }
    return null;
};


export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {

        const dataYearlyRaw = [...this.props.data]
        let datafordiagram = []
        for (let i = 2006; i < 2022; i++) {
            let googleZahl = 0
            let klinikZahl = 0

            let year = {
                name: i.toString(),
                GoogleMaps: 0,
                KlinikDe: 0,

            }

            dataYearlyRaw.map(r => {
                if (r.year === i) {
                    if (r.source === "googleMaps") {
                        year.GoogleMaps = year.GoogleMaps + r.polarity
                        googleZahl++
                    } else {
                        year.KlinikDe = year.KlinikDe + r.polarity
                        klinikZahl++
                    }
                }
                return r
            })

            if (googleZahl === 0) {
                year.GoogleMaps = 0
            } else {
                year.GoogleMaps = Number.parseFloat(year.GoogleMaps / googleZahl).toPrecision(2)
            }

            if (klinikZahl === 0) {
                year.KlinikDe = 0
            } else {
                year.KlinikDe = Number.parseFloat(year.KlinikDe / klinikZahl).toPrecision(2)
            }

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
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke={this.props.dark ? '#555555' : '#dddddd'} />
                <XAxis dataKey="name" tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <YAxis tick={{ fill: this.props.dark ? '#dddddd' : 'aaaaaa' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="KlinikDe" fill="#9E2631" />
                <Bar dataKey="GoogleMaps" fill="#0C8FA7" />
            </BarChart>

        );
    }
}
