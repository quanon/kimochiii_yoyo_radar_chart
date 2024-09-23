import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const KimochiiiYoyoName = ({ name, setName }) => (
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
);

KimochiiiYoyoName.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired
};

export default KimochiiiYoyoName;
