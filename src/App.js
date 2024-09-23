import React from 'react';
import KimochiiiRadarChart from './components/KimochiiiRadarChart';
import KimochiiiSlider from './components/KimochiiiSlider';
import KimochiiiFooter from './components/KimochiiiFooter';
import { useQueryState } from './useQueryState';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Grid';
import TextField from '@mui/material/TextField';
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
    description: '形状・サイズが起因する持ち心地のよさ',
    defaultValue: 3
  }
];

const App = () => {
  const [name, setName] = useQueryState('name');
  const [values, setValues] = useQueryState('values', axises.map((axis) => axis.defaultValue));
  const setValueAt = (index) => (value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  return (
    <Box sx={{ px: 1.5 }}>
      <Grid container rowSpacing={0.5} columnSpacing={2}>
        <Grid size={2} />
        <Grid size={8}>
          <Box display="flex" alignItems="center" justifyContent="center" pt={1}>
            <Box width={200}>
              <TextField
                label="Yo-Yo"
                variant="standard"
                slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
                defaultValue={name}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  setName(value);
                }}
                fullWidth
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={2} />
        <Grid size={12}>
          <KimochiiiRadarChart labels={axises.map((axis) => axis.label)} values={values} />
        </Grid>
        {axises.map((axis, i) => (
            <Grid size={6} key={`slider-wrapper-${i}`}>
              <KimochiiiSlider
                index={i}
                label={axis.label}
                description={axis.description}
                value={values[i]}
                setValue={setValueAt(i)}
              />
            </Grid>
        ))}
        <Grid size={12}>
          <KimochiiiFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
