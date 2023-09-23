import { FC } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { timeCode: '04:43', uv: 400 },
  { timeCode: '01:43', uv: 400 },
  { timeCode: '03:43', uv: 300 },
  { timeCode: '01:20', uv: 100 },
  { timeCode: '02:43', uv: 500 },
  { timeCode: '04:43', uv: 400 },
  { timeCode: '04:43', uv: 400 },
  { timeCode: '04:43', uv: 400 },
  { timeCode: '04:43', uv: 400 },
  { timeCode: '04:43', uv: 30 },
  { timeCode: '04:43', uv: 200 },
  { timeCode: '04:43', uv: 400 },
  { timeCode: '03:43', uv: 100 },
  { timeCode: '04:43', uv: 120 },
  { timeCode: '04:43', uv: 120 },
  { timeCode: '04:43', uv: 120 }
]

interface IChartProps {
  toTimeCode: (timeStamp: string) => void
}

const Chart: FC<IChartProps> = ({ toTimeCode }) => {
  return (
    <div className="p-5 flex flex-col w-full gap-3 break justify-center items-center">
      <h1 className="text-[30px] font-bold">График отвлечения бригады во время работы</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e31b1a" strokeDasharray="5 5" />
          <Line
            dot
            activeDot={{
              r: 9,
              onClick: (props, { payload }: any) => {
                props
                toTimeCode(payload.timeCode)
              }
            }}
            type="monotone"
            strokeWidth={2}
            dataKey="uv"
            stroke="#e31b1a"
          />
          <XAxis
            dataKey="timeCode"
            tick={({ payload, x, y }) => {
              return (
                <g transform={`translate(${x},${y})`}>
                  <text
                    onClick={() => {
                      toTimeCode(payload.value)
                    }}
                    x={0}
                    textAnchor="middle"
                    y={0}
                    dy={20}
                    fill="black"
                  >
                    {payload.value}
                  </text>
                </g>
              )
            }}
            onClick={() => {
              console.log()
            }}
          />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
