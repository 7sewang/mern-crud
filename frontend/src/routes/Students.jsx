import { Typography, Button, Box } from "@mui/joy";
import { Link } from "react-router-dom";

const Students = () => {
  return (
    <Box>
      <Typography level="h2"> Show All Students</Typography>;
      <Button size="md" component={Link} to="/">
        Home
      </Button>
    </Box>
  );
};

export default Students;
