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

import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();
  const { control } = useForm({
    defaultValues: {
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
          <CardContent>
            
          <Form
            control={control}
            method="post"
            action={`${axios.defaults.baseURL}/api/v1/students`}
            // onSuccess={() => navigate('/students', { replace: true })}
            // onError={async ({ response }) => {
            //   const res = await response.json();
            //   res.errors.forEach((e) => {
            //     setError(e.name, { type: e.type, message: e.message });
            //   });
            // }}
          >

              <Grid spacing={3} container>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your first name....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your last name....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>State </FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your state....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>City </FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your City ....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter your country....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid sxm={6} lg={3} item>
                  <Controller
                    name="pincode"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel>Pincode</FormLabel>
                        <Input
                          {...field}
                          placeholder="Enter Pincode....."
                          size="lg"
                        />
                        {/* <FormHelperText>This field is required</FormHelperText> */}
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
                        {/* <FormHelperText>{errors.gender?.message}</FormHelperText> */}
                      </FormControl>
                    )}
                  />
                </Grid>
              </Grid>

              <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                <Button type="submit" size="lg">
                  Create
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

export default CreateStudent;
