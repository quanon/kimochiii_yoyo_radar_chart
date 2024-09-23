import React, { useState } from 'react';
import KimochiiiRadarChart from './components/KimochiiiRadarChart';
import KimochiiiSlider from './components/KimochiiiSlider';
import KimochiiiSwitch from './components/KimochiiiSwitch';
import KimochiiiFooter from './components/KimochiiiFooter';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Grid';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
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
  const [name, setName] = useState(localStorage.getItem('name'));
  let storedValues = localStorage.getItem('values');
  storedValues = storedValues ? JSON.parse(storedValues).map((n) => Number(n)) : null;
  const [values, setValues] = useState(storedValues || axises.map((axis) => axis.defaultValue));
  const setValueAt = (index) => (value) => {
    const newValues = [...values];
    newValues[index] = value;
    localStorage.setItem('values', JSON.stringify(newValues));
    setValues(newValues);
  };
  const [checked, setChecked] = React.useState(true);
  const onChangeSwitch = (e, v) => {
    setChecked(v);
  };

  return (
    <Box sx={{ px: 1.5 }}>
      <Grid container rowSpacing={0.5} columnSpacing={2}>
        <Grid size={2} />
        <Grid size={8}>
          <Box display="flex" alignItems="center" justifyContent="center" pt={2}>
            <TextField
              label="Yo-Yo"
              variant="standard"
              slotProps={{ htmlInput: { style: { textAlign: 'center' } } }}
              defaultValue={name}
              onChange={(e) => {
                const { value } = e.currentTarget;
                localStorage.setItem('name', value);
                setName(value);
              }}
            />
          </Box>
        </Grid>
        <Grid size={2} />
        <Grid size={12}>
          <KimochiiiRadarChart labels={axises.map((axis) => axis.label)} values={values} />
        </Grid>
        <Grid size={12}>
          <Collapse in={checked} timeout="auto" unmountOnExit>
            <Grid container rowSpacing={0} columnSpacing={1}>
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
            </Grid>
          </Collapse>
        </Grid>
        <Grid size={12}>
          <Grid container justifyContent="flex-end">
            <KimochiiiSwitch checked={checked} setChecked={setChecked} />
          </Grid>
        </Grid>
        <Grid size={12}>
          <KimochiiiFooter />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
