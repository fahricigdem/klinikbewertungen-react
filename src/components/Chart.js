import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



export default class Chart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

    render() {
        return (

            <PieChart width={300} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={this.props.data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />

                <Tooltip />
            </PieChart>

        );
    }
}


