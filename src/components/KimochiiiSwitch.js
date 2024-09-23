import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const KimochiiiSwitch = ({
  checked, setChecked
}) => {
  const onChangeSwitch = (e, v) => {
    setChecked(v);
  };

  return (
    <FormControlLabel
      control={
        <Switch checked={checked} size="small" color="default" onChange={onChangeSwitch} />
      }
      label={
        <Typography sx={{ fontSize: '0.6rem' }}>
          Show sliders
        </Typography>
      }
      sx={{ mr: 0 }}
    />
  );
};

KimochiiiSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired
};

export default KimochiiiSwitch;
