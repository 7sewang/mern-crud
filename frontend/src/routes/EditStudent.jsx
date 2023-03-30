import axios from "axios";
import {
  Typography,
  Button,
  Stack,
  Grid,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Card,
  CardContent,
  CardOverflow,
} from "@mui/joy";
import Wrapper from "../components/wrapper";
import { Controller, useForm, Form } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  const getStudent = async () => {
    const response = await axios.get(`/api/v1/students/${id}`);
    const res = response.data.data;
    setStudent(res);
  };

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    if (student) {
      reset(student);
    }
    getStudent();
  }, [student]);

  console.log(student);
  const {
    control,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: student || {
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      gender: "",
    },
  });
  return (
    <>
      <Wrapper>
        <Card>
          <CardOverflow sx={{ py: 2 }} variant="solid">
            <Typography level="h5" sx={{ color: "#fff", fontWeight: 700 }}>
              Edit Student
            </Typography>
          </CardOverflow>
          <CardContent>
            <Form
              control={control}
              method="put"
              action={`${axios.defaults.baseURL}/api/v1/students/${id}`}
              onSuccess={() => navigate("/students", { replace: true })}
              onError={async ({ response }) => {
                const res = await response.json();
                // console.log(res);
                res.errors.forEach((e) => {
                  setError(e.name, { type: e.type, message: e.message });
                });
              }}
            >
              <Grid spacing={3} container>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.firstName && "danger"}>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your first name....."
                          size="lg"
                        />
                        <FormHelperText>
                          {errors.firstName?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.lastName && "danger"}>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your last name....."
                          size="lg"
                        />
                        <FormHelperText>
                          {errors.lastName?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.state && "danger"}>
                        <FormLabel>State </FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your state....."
                          size="lg"
                        />
                        <FormHelperText>{errors.state?.message}</FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.city && "danger"}>
                        <FormLabel>City </FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your City ....."
                          size="lg"
                        />
                        <FormHelperText>{errors.city?.message}</FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.country && "danger"}>
                        <FormLabel>Country</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your country....."
                          size="lg"
                        />
                        <FormHelperText>
                          {errors.country?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="pincode"
                    control={control}
                    render={({ field }) => (
                      <FormControl color={errors.pincode && "danger"}>
                        <FormLabel>Postal No</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter Poostal....."
                          size="lg"
                        />
                        <FormHelperText>
                          {errors.pincode?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>

                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <FormControl color="danger">
                        <FormLabel sx={{ mb: 2 }}>Choose your gender</FormLabel>
                        <RadioGroup {...field} orientation="horizontal">
                          <Radio value="female" label="Female" />
                          <Radio value="male" label="Male" />
                          <Radio value="other" label="Other" />
                        </RadioGroup>
                        <FormHelperText>
                          {errors.gender?.message}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
              </Grid>

              <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                <Button type="submit" size="lg">
                  Update
                </Button>
                <Button
                  onClick={() => navigate(-1)}
                  variant="outlined"
                  color="neutral"
                  size="lg"
                >
                  Cancel
                </Button>
              </Stack>
            </Form>
          </CardContent>
        </Card>
      </Wrapper>
    </>
  );
};

export default EditStudent;
