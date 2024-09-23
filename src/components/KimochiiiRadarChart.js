import React from 'react';
import PropTypes from 'prop-types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer
} from 'recharts';

const KimochiiiRadarChart = ({ labels, values }) => {
  const data = labels.map((label, i) => ({
    subject: label,
    fullMark: 5,
    A: values[i]
  }));
  let width = 350;
  if (window.matchMedia('(min-width: 768px)').matches) {
    width = 750;
  }
  return (
    <ResponsiveContainer minWidth={width} minHeight={width}>
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
};

KimochiiiRadarChart.propTypes = {
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired
};

export default KimochiiiRadarChart;
