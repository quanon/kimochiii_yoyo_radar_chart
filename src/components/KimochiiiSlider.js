import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [0, 1, 2, 3, 4, 5].map((n) => ({ value: n }));
const isIOS = () => {
  const { userAgent } = navigator;

  return userAgent.indexOf('iPhone') >= 0 || userAgent.indexOf('iPad') >= 0 || userAgent.indexOf('iPod') >= 0;
};

const KimochiiiSlider = ({
  index, label, description, value, setValue
}) => {
  const onChangeSlider = (e, v) => {
    // https://github.com/mui/material-ui/issues/32737
    if (isIOS() && e.type === 'mousedown') return;

    setValue(v);
  };

  return (
    <Box>
      <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
        {label}
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ fontSize: '0.5rem', display: 'block', mb: 0 }}>
        {description}
      </Typography>
      <Slider
        key={`slider-${index}`}
        value={value}
        step={0.5}
        marks={marks}
        min={0}
        max={5}
        size="small"
        onChange={onChangeSlider}
        onChangeCommitted={
          (e, v) => {
            if (isIOS() && e.type === 'mouseup') return;

            onChangeSlider(e, v);
          }
        }
      />
    </Box>
  );
};

KimochiiiSlider.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired
};

export default KimochiiiSlider;
