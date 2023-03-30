import { Typography, Grid, Button } from "@mui/joy";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../components/wrapper";
import StudenCard from "../components/StudenCard";

const Students = () => {
  const [student, setStudent] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/api/v1/students");
    setStudent(res.data.data);
  }, []);

  return (
    <Wrapper>
      <Button level="h2" component={Link} to='/create-student' sx={{mb: 2}}>Add Records</Button>
      <Grid spacing={2} container>

      {student?.map(student => (
        <StudenCard key={student._id} student={student}/>
        
      ))}
      </Grid>
      
    </Wrapper>
  );
};

export default Students;
