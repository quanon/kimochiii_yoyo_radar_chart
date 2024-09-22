import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const KimochiiiRadarChart = ({ labels, values }) => {
  const data = labels.map((label, i) => {
    return {
      subject: label,
      fullMark: 5,
      A: values[i]
    }
  });
  return (
    <ResponsiveContainer minWidth={300} minHeight={300}>
      <RadarChart
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: '0.8rem' }} />
        <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} tick={{ fontSize: '0.8rem' }} />
        <Radar
          dataKey="A"
          stroke="#1976d2"
          fill="#1976d2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default KimochiiiRadarChart;
