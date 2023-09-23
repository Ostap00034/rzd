import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { type: 'high', count: 7 },
  { type: 'middle', count: 2 },
  { type: 'low', count: 1 }
]

const CircleChart = () => {
  return (
    <ResponsiveContainer className="flex justify-center items-center" width="25%" height={400}>
      <PieChart>
        <Pie data={data} innerRadius="50%" outerRadius="80%" paddingAngle={5} dataKey="count">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.type === 'high' ? '#e31b1a' : entry.type === 'middle' ? '#f0e10e' : '#79e630'
              }
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CircleChart
