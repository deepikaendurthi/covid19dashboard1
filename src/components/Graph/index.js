import {Component, Bar} from 'react'

import './index.css'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts'

export default class Graphs extends Component {
  state = {
    lineData: [
      {
        date: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        date: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
    ],
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: true,
          lineTension: 0.6,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56],
        },
      ],
    },
  }

  componentDidMount() {
    const {dates} = this.props

    console.log(dates)
    const len = dates.length
    console.log(len)
    const lab = [
      dates[9].date,
      dates[8].date,
      dates[7].date,
      dates[6].date,
      dates[5].date,
      dates[4].date,
      dates[3].date,
      dates[2].date,
      dates[1].date,
      dates[0].date,
    ]
    const dat = [
      dates[9].conformed,
      dates[8].conformed,
      dates[7].conformed,
      dates[6].conformed,
      dates[5].conformed,
      dates[4].conformed,
      dates[3].conformed,
      dates[2].conformed,
      dates[1].conformed,
      dates[0].conformed,
    ]
    const updated = {
      labels: lab,
      datasets: [
        {
          label: 'Confirmed',
          fill: true,
          lineTension: 0.8,
          backgroundColor: '#9A0E31',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          borderRadius: 10,
          data: dat,
        },
      ],
    }
    dates.reverse()
    this.setState({data: updated, lineData: dates})
  }

  render() {
    const {data, lineData} = this.state

    return (
      <div>
        <div className="bar-graph">
          <Bar
            data={data}
            options={{
              title: {
                display: true,
                text: 'Average Rainfall per month',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
              maintainAspectRatio: true,
            }}
          />
        </div>
        <div style={{width: '100%'}}>
          <div className="chart chart-conformed">
            <p className="graph-name graph-conformed">Confirmed</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                width={1000}
                height={260}
                data={lineData}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  style={{display: 'none'}}
                />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="conformed"
                  stroke="#FF073A"
                  fill="#FF073A"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart chart-recovered">
            <p className="graph-name graph-recovered">Recovered</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                width={1000}
                height={260}
                data={lineData}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  style={{display: 'none'}}
                />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="recovered"
                  stroke="#27A243"
                  fill="#27A243"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart chart-deceased">
            <p className="graph-name graph-deceased">Deceased</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                width={1000}
                height={260}
                data={lineData}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  style={{display: 'none'}}
                />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="deceased"
                  stroke="#6C757D"
                  fill="#6C757D"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart chart-tested">
            <p className="graph-name graph-tested">Tested</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                width={1000}
                height={260}
                data={lineData}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  style={{display: 'none'}}
                />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="tested"
                  stroke="#9673B9"
                  fill="#9673B9"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart chart-vaccinated1">
            <p className="graph-name graph-vaccinated1">Vaccinated</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                width={1000}
                height={260}
                data={lineData}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  style={{display: 'none'}}
                />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="vaccinated1"
                  stroke="#F95581"
                  fill="#F95581"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    )
  }
}
