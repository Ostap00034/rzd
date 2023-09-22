import { FC } from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 100 },
  { name: 'Page D', uv: 500 },
  { name: 'Page E', uv: 400 }
]

const Chart: FC = () => {
  return (
    <div>
      <h1 className="text-[30px] font-bold">График отвлечения бригады во время работы</h1>
      <LineChart width={400} height={400} data={data}>
        <Line dot type="monotone" strokeWidth={2} dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  )
}

export default Chart
