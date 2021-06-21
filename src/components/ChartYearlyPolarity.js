import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
        console.log(datafordiagram)

        let weit = window.screen.width - 30;
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="KlinikDe" fill="#8884d8" />
                <Bar dataKey="GoogleMaps" fill="#82ca9d" />
            </BarChart>

        );
    }
}
