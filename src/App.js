
import { useState } from "react";
import KimochiiiRadarChart from "./components/KimochiiiRadarChart";
import KimochiiiSlider from "./components/KimochiiiSlider";
import Box from '@mui/material/Box';
import Grid from '@mui/system/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const axises = [
  {
    label: '維持力',
    description: 'いいフィーリングの持続性',
    defaultValue: 3
  },
  {
    label: 'DENSE',
    description: '存在感 + 柔らかさ',
    defaultValue: 3
  },
  {
    label: 'FLOATY',
    description: '軽快さ + ソリッド感',
    defaultValue: 3
  },
  {
    label: '投げ戻り',
    description: '投げ出しとバインド時の心地よさ',
    defaultValue: 3
  },
  {
    label: 'タッチ',
    description: 'ストリングヒット時の感触のよさ',
    defaultValue: 3
  },
  {
    label: 'フィット',
    description: '形状・サイズが起因するもち心地のよさ',
    defaultValue: 3
  }
];

const App = () => {
  const [name, setName] = useState(localStorage.getItem('name'));
  const storedValues = localStorage.getItem('values');
  const initialValues = storedValues ? JSON.parse(storedValues).map((n) => Number(n)) : axises.map((axis) => axis.defaultValue)
  const [values, setValues] = useState(initialValues);
  const setValueAt = (index) => {
    return (value) => {
      const newValues = [...values];
      newValues[index] = value;
      localStorage.setItem('values', JSON.stringify(newValues));
      setValues(newValues);
    };
  };

  return (
    <Box sx={{ px: 2 }}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid size={2}></Grid>
        <Grid size={8}>
          <Box display="flex" alignItems="center" justifyContent="center" pt={1}>
            <TextField
              label="Yo-Yo" variant="standard" width={300} slotProps={{ htmlInput: { style: { textAlign: 'center' } } }} defaultValue={name}
              onChange={(e) => {
                const value = e.currentTarget.value;
                localStorage.setItem('name', value);
                setName(value);
              }}
            />
          </Box>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={12}>
          <KimochiiiRadarChart labels={axises.map((axis) => axis.label)} values={values} />
        </Grid>
        {axises.map((axis, i) => {
          return (
            <Grid size={6} key={`slider-wrapper-${i}`}>
              <KimochiiiSlider key={`slider-${i}`} label={axis.label} description={axis.description} defaultValue={initialValues[i]} setValue={setValueAt(i)} />
            </Grid>
          );
        })}
        <Grid size={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography sx={{ fontSize: '0.6rem' }} gutterBottom>
              This app is based on <a href="https://www.youtube.com/watch?v=ts6CJosyLHk">this video</a>.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
