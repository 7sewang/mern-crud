import axios from "axios";
import {
  Card,
  CardOverflow,
  Grid,
  Typography,
  AspectRatio,
  Divider,
  Stack,
  IconButton,
  Box,
} from "@mui/joy";
import { Link } from "react-router-dom";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";

const StudenCard = ({ student }) => {
  return (
    <>
      <Grid lg={2} item>
        <Card>
          <Box sx={{ position: "relative" }}>
            <AspectRatio minHeight="250px" maxHeight="450px">
              <img
                src={`${axios.defaults.baseURL}/uploads/${student.profile}`}
              />
            </AspectRatio>
          </Box>
          <CardOverflow sx={{ py: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <div>
                <Typography level="body1" fontWeight={700}>
                  {student.firstName} {student.lastName}
                </Typography>
                <Typography level="body2">
                  {student.city}, {student.state}, {student.country}
                </Typography>
              </div>
              <Stack direction="row" spacing={1}>
                <IconButton  component={Link} to={`/edit-student/${student._id}`}>
                  <EditTwoToneIcon color="success"/>
                </IconButton>

                <IconButton color="danger">
                  <DeleteTwoToneIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CardOverflow>
          <CardOverflow
            variant="soft"
            sx={{
              py: 1,
              display: "flex",
              gap: 1,
              bgcolor: "background.level1",
            }}
          >
            <Typography level="body3">pincode: {student.pincode}</Typography>
            <Divider orientation="vertical" />
            <Typography level="body3">gender: {student.gender}</Typography>
          </CardOverflow>
        </Card>
      </Grid>
    </>
  );
};

export default StudenCard;
