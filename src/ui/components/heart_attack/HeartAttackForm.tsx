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
import { useState } from "react";
import { CustomError } from "utils/CustomError";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function HeartAttackForm() {
  const [error, setError] = useState<CustomError>();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    onSubmit: async () => {
      try {
        const data: HeartAttackDomain = new HeartAttackDomain({ ...values });
        const prediction = await HeartAttackPredict(data);
      } catch (error: any) {
        setError(error);
        navigate("/error", { state: { error } });
      }
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
              <FormLabel>{t("heart_attack.gender")}</FormLabel>
              <Select
                name="sex"
                value={values.sex}
                placeholder={t("heart_attack.gender_placeholder")}
                onChange={handleChange}
              >
                <option value="Male">{t("heart_attack.male")}</option>
                <option value="Female">{t("heart_attack.female")}</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.diet")}</FormLabel>
              <Select
                name="diet"
                value={values.diet}
                placeholder={t("heart_attack.diet_placeholder")}
                onChange={handleChange}
              >
                <option value="Unhealthy">{t("heart_attack.unhealthy")}</option>
                <option value="Average">{t("heart_attack.average")}</option>
                <option value="Healthy">{t("heart_attack.healthy")}</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.age")}</FormLabel>
              <Input
                name="age"
                value={values.age}
                placeholder={t("heart_attack.age_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.cholesterol_level")}</FormLabel>
              <Input
                name="cholesterol"
                value={values.cholesterol}
                placeholder={t("heart_attack.cholesterol_level_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.heart_rate")}</FormLabel>
              <Input
                name="heart_rate"
                value={values.heart_rate}
                placeholder={t("heart_attack.heart_rate_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.alcohol_consumption")}</FormLabel>
              <Input
                name="alcohol_consumption"
                value={values.alcohol_consumption}
                placeholder={t("heart_attack.alcohol_consumption_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.exercise")}</FormLabel>
              <Input
                name="exercise_hours_per_week"
                value={values.exercise_hours_per_week}
                placeholder={t("heart_attack.exercise_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.stress_level")}</FormLabel>
              <Input
                name="stress_level"
                value={values.stress_level}
                placeholder={t("heart_attack.stress_level_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.sedentary")}</FormLabel>
              <Input
                name="sedentary_hours_per_day"
                value={values.sedentary_hours_per_day}
                placeholder={t("heart_attack.sedentary_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.bmi")}</FormLabel>
              <Input
                name="bmi"
                value={values.bmi}
                placeholder={t("heart_attack.bmi_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.triglycerides")}</FormLabel>
              <Input
                name="triglycerides"
                value={values.triglycerides}
                placeholder={t("heart_attack.triglycerides_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.physical_days")}</FormLabel>
              <Input
                name="physical_activity_days_per_week"
                value={values.physical_activity_days_per_week}
                placeholder={t("heart_attack.physical_days_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.sleep_per_day")}</FormLabel>
              <Input
                name="sleep_hours_per_day"
                value={values.sleep_hours_per_day}
                placeholder={t("heart_attack.sleep_per_day_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>
            </FormControl>
            <Button type="button" onClick={() => handleSubmit()}>
              {t("buttons.submit")}
            </Button>
            <Button type="button" onClick={() => resetForm()}>
              {t("buttons.reset")}
            </Button>
          </form>
        </Center>
      </Center>
    </>
  );
}

export default HeartAttackForm;
