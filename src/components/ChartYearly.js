import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="GooglePositive" stackId="a" fill="#B32D2E" />
                <Bar dataKey="GoogleNegative" stackId="a" fill="#F86368" />
                <Bar dataKey="KlinikDePositive" stackId="b" fill="#189AB4" />
                <Bar dataKey="KlinikDeNegative" stackId="b" fill="#75E6DA" />
            </BarChart>

        );
    }
}
