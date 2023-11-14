import {
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
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
import { FaHome } from "react-icons/fa";
import PredictionModal from "../commons/PredictionModal/PredictionModal";

function HeartAttackForm() {
  const [error, setError] = useState<CustomError>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [modalBodyText, setModalBodyText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [goodOrBadPrediction, setGoodOrBadPrediction] =
    useState<boolean>(false);

  const validatePositiveInteger = (value: any) => {
    return value >= 0;
  };
  const validateRange = (value: any, min: number, max: number) => {
    return value >= min && value <= max;
  };
  const backHome = () => {
    navigate("/");
  };
  const returnHere = () => {
    setIsOpen(false);
  };
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
        const data: HeartAttackDomain = new HeartAttackDomain({
          ...formik.values,
        });
        const prediction = await HeartAttackPredict(data);
        var bodyText = "no_prediction";
        if (prediction.prediction === 0) {
          bodyText = "heart_attack.prediction.false";
          setGoodOrBadPrediction(true);
        } else if (prediction.prediction === 1) {
          bodyText = "heart_attack.prediction.true";
          setGoodOrBadPrediction(false);
        }

        setModalBodyText(bodyText);
        setIsOpen(true);
      } catch (error: any) {
        setError(error);
        navigate("/error", { state: { error } });
      }
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.sex) {
        errors.sex = t("heart_attack.errors.sex");
      }
      if (!values.diet) {
        errors.diet = t("heart_attack.errors.diet");
      }
      if (
        values.age === undefined ||
        values.age === null ||
        values.age === "" ||
        !validatePositiveInteger(values.age)
      ) {
        errors.age = t("heart_attack.errors.age");
      }
      if (
        values.cholesterol === undefined ||
        values.cholesterol === null ||
        values.cholesterol === "" ||
        !validatePositiveInteger(values.cholesterol)
      ) {
        errors.cholesterol = t("heart_attack.errors.cholesterol");
      }
      if (
        values.heart_rate === undefined ||
        values.heart_rate === null ||
        values.heart_rate === "" ||
        !validatePositiveInteger(values.heart_rate)
      ) {
        errors.heart_rate = t("heart_attack.errors.heart_rate");
      }
      if (
        values.alcohol_consumption === undefined ||
        values.alcohol_consumption === null ||
        values.alcohol_consumption === "" ||
        !validatePositiveInteger(values.alcohol_consumption)
      ) {
        errors.alcohol_consumption = t(
          "heart_attack.errors.alcohol_consumption"
        );
      }
      if (
        values.exercise_hours_per_week === undefined ||
        values.exercise_hours_per_week === null ||
        values.exercise_hours_per_week === "" ||
        !validateRange(values.exercise_hours_per_week, 0, 164)
      ) {
        errors.exercise_hours_per_week = t(
          "heart_attack.errors.exercise_hours_per_week"
        );
      }
      if (
        values.stress_level === undefined ||
        values.stress_level === null ||
        values.stress_level === "" ||
        !validateRange(values.stress_level, 0, 10)
      ) {
        errors.stress_level = t("heart_attack.errors.stress_level");
      }
      if (
        values.sedentary_hours_per_day === undefined ||
        values.sedentary_hours_per_day === null ||
        values.sedentary_hours_per_day === "" ||
        !validateRange(values.sedentary_hours_per_day, 0, 24)
      ) {
        errors.sedentary_hours_per_day = t(
          "heart_attack.errors.sedentary_hours_per_day"
        );
      }
      if (
        values.bmi === undefined ||
        values.bmi === null ||
        values.bmi === "" ||
        !validatePositiveInteger(values.bmi)
      ) {
        errors.bmi = t("heart_attack.errors.bmi");
      }
      if (
        values.triglycerides === undefined ||
        values.triglycerides === null ||
        values.triglycerides === "" ||
        !validatePositiveInteger(values.triglycerides)
      ) {
        errors.triglycerides = t("heart_attack.errors.triglycerides");
      }
      if (
        values.physical_activity_days_per_week === undefined ||
        values.physical_activity_days_per_week === null ||
        values.physical_activity_days_per_week === "" ||
        !validateRange(values.physical_activity_days_per_week, 0, 7)
      ) {
        errors.physical_activity_days_per_week = t(
          "heart_attack.errors.physical_activity_days_per_week"
        );
      }
      if (
        values.sleep_hours_per_day === undefined ||
        values.sleep_hours_per_day === null ||
        values.sleep_hours_per_day === "" ||
        !validateRange(values.sleep_hours_per_day, 0, 24)
      ) {
        errors.sleep_hours_per_day = t(
          "heart_attack.errors.sleep_hours_per_day"
        );
      }
      return errors;
    },
  });

  const { values, errors, handleChange, handleSubmit, resetForm } = formik;

  return (
    <>
      <PredictionModal
        isOpen={isOpen}
        onClose={() => {
          returnHere();
        }}
        bodyText={modalBodyText}
        returnHome={backHome}
        title="titles.heart_attack"
        goodOrBad={goodOrBadPrediction}
      ></PredictionModal>
      <Flex>
        <Button onClick={backHome} leftIcon={<Icon as={FaHome} />}>
          {t("buttons.back_home")}
        </Button>
      </Flex>
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
              <FormHelperText color="red">
                {formik.touched.sex && errors.sex && t(`${errors.sex}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.diet && errors.diet && t(`${errors.diet}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.age && errors.age && t(`${errors.age}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.cholesterol &&
                  errors.cholesterol &&
                  t(`${errors.cholesterol}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.heart_rate &&
                  errors.heart_rate &&
                  t(`${errors.heart_rate}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.alcohol_consumption &&
                  errors.alcohol_consumption &&
                  t(`${errors.alcohol_consumption}`)}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>{t("heart_attack.exercise")}</FormLabel>
              <Input
                name="exercise_hours_per_week"
                value={values.exercise_hours_per_week}
                placeholder={t("heart_attack.exercise_placeholder")}
                onChange={handleChange}
                type="number"
              ></Input>{" "}
              <FormHelperText color="red">
                {formik.touched.exercise_hours_per_week &&
                  errors.exercise_hours_per_week &&
                  t(`${errors.exercise_hours_per_week}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.stress_level &&
                  errors.stress_level &&
                  t(`${errors.stress_level}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.sedentary_hours_per_day &&
                  errors.sedentary_hours_per_day &&
                  t(`${errors.sedentary_hours_per_day}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.bmi && errors.bmi && t(`${errors.bmi}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.triglycerides &&
                  errors.triglycerides &&
                  t(`${errors.triglycerides}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.physical_activity_days_per_week &&
                  errors.physical_activity_days_per_week &&
                  t(`${errors.physical_activity_days_per_week}`)}
              </FormHelperText>
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
              <FormHelperText color="red">
                {formik.touched.sleep_hours_per_day &&
                  errors.sleep_hours_per_day &&
                  t(`${errors.sleep_hours_per_day}`)}
              </FormHelperText>
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
