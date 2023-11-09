import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { FormikValues, useFormik } from "formik";
import "./HeartAttackForm.css";
import { HeartAttackPredict } from "application/usecase/heart_attack_predict_use_case/HeartAttackPredictUseCase";
import { HeartAttackDomain } from "domain/model/heart_attack/HeartAttackDomain";
function HeartAttackForm() {
  const formik = useFormik<FormikValues>({
    initialValues: {
      sex: "",
      diet: "",
      age: "",
      cholesterol: "",
      heart_rate: "",
      alcohol_consumption: "",
      exercise_hours_per_week: "",
      stress_level: "",
      sedentary_hours_per_day: "",
      bmi: "",
      triglycerides: "",
      physical_activity_days_per_week: "",
      sleep_hours_per_day: "",
    },
    onSubmit: () => {
      console.log("📢 VALUES", values);
      const data = new HeartAttackDomain({ ...values });
      console.log("📢 DATA", data);
      const res = HeartAttackPredict(data);
      console.log("📢 RES", res);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    resetForm,
  } = formik;

  return (
    <>
      <Center className="heart-attack-form-container-container">
        <Center className="heart-attack-form-container">
          {" "}
          <form>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                name="sex"
                value={values.sex}
                placeholder="Select your gender"
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Diet</FormLabel>
              <Select
                name="diet"
                value={values.diet}
                placeholder="Select your type of diet"
                onChange={handleChange}
              >
                <option value="Unhealthy">Unhealthy</option>
                <option value="Average">Average</option>
                <option value="Healthy">Healthy</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input
                name="age"
                value={values.age}
                placeholder="Insert your age"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Cholesterol level</FormLabel>
              <Input
                name="cholesterol"
                value={values.cholesterol}
                placeholder="Insert your cholesterol level"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Average heart rate</FormLabel>
              <Input
                name="heart_rate"
                value={values.heart_rate}
                placeholder="Insert your Average heart rate"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Average alcohol consumption per week</FormLabel>
              <Input
                name="alcohol_consumption"
                value={values.alcohol_consumption}
                placeholder="Insert your average alcohol consumption per week"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Exercise hours per week</FormLabel>
              <Input
                name="exercise_hours_per_week"
                value={values.exercise_hours_per_week}
                placeholder="Insert your exercise hours per week"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Average stress level</FormLabel>
              <Input
                name="stress_level"
                value={values.stress_level}
                placeholder="Insert your average stress level"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Sedentary hours per week</FormLabel>
              <Input
                name="sedentary_hours_per_day"
                value={values.sedentary_hours_per_day}
                placeholder="Insert your sedentary hours per week"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>BMI</FormLabel>
              <Input
                name="bmi"
                value={values.bmi}
                placeholder="Insert your bmi"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Triglycerides</FormLabel>
              <Input
                name="triglycerides"
                value={values.triglycerides}
                placeholder="Insert your triglycerides"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Physical activity days per week</FormLabel>
              <Input
                name="physical_activity_days_per_week"
                value={values.physical_activity_days_per_week}
                placeholder="Insert your physical activity days per week"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Sleep hours per day</FormLabel>
              <Input
                name="sleep_hours_per_day"
                value={values.sleep_hours_per_day}
                placeholder="Insert your sleep hours per day"
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <Button type="button" onClick={() => handleSubmit()}>
              Submit
            </Button>
            <Button type="button" onClick={() => resetForm()}>
              Reset
            </Button>
          </form>
        </Center>
      </Center>
    </>
  );
}

export default HeartAttackForm;
