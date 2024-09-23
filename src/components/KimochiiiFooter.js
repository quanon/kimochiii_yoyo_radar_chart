import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const KimochiiiFooter = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Typography sx={{ fontSize: '0.6rem' }} color="rgba(0, 0, 0, 0.6)" align="center" gutterBottom>
      This app is based on <a href="https://www.youtube.com/watch?v=ts6CJosyLHk" target="_blank" rel="noopener noreferrer">this video</a>.
      <br />
      Please contact <a href="https://x.com/quanon_jp" target="_blank" rel="noopener noreferrer">@quanon_jp</a> if you have any questions.
    </Typography>
  </Box>
);

export default KimochiiiFooter;
