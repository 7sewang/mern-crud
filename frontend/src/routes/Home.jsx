import { Box, Button, Typography } from "@mui/joy";
import hero from "../assets/office.svg";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={hero} alt="hero" style={{ height: "38vmax" }} />
      <Button size="lg" component={Link} to="students"> Get Started</Button>
    </Box>
  );
};

export default Home;
