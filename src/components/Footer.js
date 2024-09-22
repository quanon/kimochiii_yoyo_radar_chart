import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography sx={{ fontSize: "0.5rem" }} color="rgba(0, 0, 0, 0.6)" gutterBottom>
        This app is based on <a href="https://www.youtube.com/watch?v=ts6CJosyLHk">this video</a>. Please contact <a href="https://x.com/quanon_jp">@quanon_jp</a> if you have any questions.
      </Typography>
    </Box>
  );
};

export default Footer;
