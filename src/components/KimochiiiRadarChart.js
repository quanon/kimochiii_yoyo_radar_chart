import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const KimochiiiRadarChart = ({ values }) => {
  const axises = [
    {
      subject: '維持力',
      fullMark: 5
    },
    {
      subject: 'DENSE',
      fullMark: 5
    },
    {
      subject: 'FLOATY',
      fullMark: 5
    },
    {
      subject: '投げ戻り',
      fullMark: 5
    },
    {
      subject: 'タッチ',
      fullMark: 5
    },
    {
      subject: 'フィット',
      fullMark: 5
    }
  ];
  const data = values.map((value, i) => {
    return Object.assign({}, axises[i], { A: value });
  });
  return (
    <ResponsiveContainer minHeight={300}>
      <RadarChart
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: '0.8rem' }} />
        <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6}tick={{ fontSize: '0.8rem' }} />
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
