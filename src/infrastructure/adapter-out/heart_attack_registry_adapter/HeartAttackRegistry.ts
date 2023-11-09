export default function HeartAttackRegistry({
  sex,
  diet,
  age,
  cholesterol,
  heart_rate,
  alcohol_consumption,
  exercise_hours_per_week,
  stress_level,
  sedentary_hours_per_day,
  bmi,
  triglycerides,
  physical_activity_days_per_week,
  sleep_hours_per_day,
}: {
  sex: string;
  diet: string;
  age: number;
  cholesterol: number;
  heart_rate: number;
  alcohol_consumption: number;
  exercise_hours_per_week: number;
  stress_level: number;
  sedentary_hours_per_day: number;
  bmi: number;
  triglycerides: number;
  physical_activity_days_per_week: number;
  sleep_hours_per_day: number;
}) {
  return {
    sex: sex,
    diet: diet,
    age: age,
    cholesterol: cholesterol,
    heart_rate: heart_rate,
    alcohol_consumption: alcohol_consumption,
    exercise_hours_per_week: exercise_hours_per_week,
    stress_level: stress_level,
    sedentary_hours_per_day: sedentary_hours_per_day,
    bmi: bmi,
    triglycerides: triglycerides,
    physical_activity_days_per_week: physical_activity_days_per_week,
    sleep_hours_per_day: sleep_hours_per_day,
  };
}
