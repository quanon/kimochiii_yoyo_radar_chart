import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const KimochiiiFooter = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Typography sx={{ fontSize: '0.55rem' }} color="rgba(0, 0, 0, 0.6)" gutterBottom>
      This app is based on <a href="https://www.youtube.com/watch?v=ts6CJosyLHk" target="_blank" rel="noopener noreferrer">this video</a>. Please contact <a href="https://x.com/quanon_jp" target="_blank" rel="noopener noreferrer">@quanon_jp</a> if you have any questions.
    </Typography>
  </Box>
);

export default KimochiiiFooter;
