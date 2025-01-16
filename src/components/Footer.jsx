import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        padding: 2,
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} VitrinaOnline. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
