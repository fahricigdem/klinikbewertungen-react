import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default class ChartYearlyComments extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    render() {
        const weit = window.screen.width - 25;
        return (

            <BarChart
                width={weit}
                height={300}
                isAnimationActive={true}
                data={this.props.data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positive" stackId="a" fill="#8884d8" />
                <Bar dataKey="negative" stackId="a" fill="#82ca9d" />
            </BarChart>

        );
    }
}
