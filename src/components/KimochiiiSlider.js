import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const marks = [0, 1, 2, 3, 4, 5].map((n) => {
  return { value: n };
});
const userAgent = navigator.userAgent;
const isIOS = userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("iPod") >= 0

const KimochiiiSlider = ({ label, description, defaultValue, setValue }) => {
  const onChange = (e, value) => {
    if (isIOS && e.type === "mousedown") {
      return;
    } else {
      setValue(value);
    }
  };

  return (
    <>
      <Typography sx={{ fontSize: '0.8rem' }} gutterBottom>
        {label}
      </Typography>
      <Typography variant="caption" gutterBottom sx={{ fontSize: '0.5rem', display: 'block' }}>
        {description}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        step={0.5}
        marks={marks}
        min={0}
        max={5}
        onChange={onChange}
        onChangeCommitted={
          (e, value) => {
            if (isIOS && e.type === "mouseup") {
              return;
            }
            onChange(e, value)
          }
        }
      />
    </>
  );
}

export default KimochiiiSlider;
