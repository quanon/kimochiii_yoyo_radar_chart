
import React, { useState } from "react";
import KimochiiiRadarChart from "./components/KimochiiiRadarChart";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Grid';
import TextField from '@mui/material/TextField';

const defaultValues = [2.5, 2.5, 2.5, 2.5, 2.5, 2.5];
const marks = [0, 1, 2, 3, 4, 5].map((n) => {
  return { value: n };
});

const App = () => {
  const [values, setValues] = useState(defaultValues);

  return (
    <Box sx={{ px: 2 }}>
      <Grid container spacing={2}>
        <Grid size={2}></Grid>
        <Grid size={8}>
          <Box display="flex" alignItems="center" justifyContent="center" pt={2}>
            <TextField label="Yo-Yo" variant="standard" width={300} slotProps={{ htmlInput: { style: { textAlign: 'center' } } }} />
          </Box>
        </Grid>
        <Grid size={2}></Grid>
        <Grid size={12}>
          <div>
            <KimochiiiRadarChart values={values} />
          </div>
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            維持力
          </Typography>
          <Slider
            defaultValue={defaultValues[0]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[0] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            DENSE
          </Typography>
          <Slider
            defaultValue={defaultValues[1]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[1] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            FLOATY
          </Typography>
          <Slider
            defaultValue={defaultValues[2]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[2] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            投げ戻り
          </Typography>
          <Slider
            defaultValue={defaultValues[3]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[3] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            タッチ
          </Typography>
          <Slider
            defaultValue={defaultValues[4]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[4] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
            フィット
          </Typography>
          <Slider
            defaultValue={defaultValues[5]}
            step={0.5}
            marks={marks}
            min={0}
            max={5}
            onChange={
              (e, value) => {
                const newValues = [...values];
                newValues[5] = value;
                setValues(newValues);
              }
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
