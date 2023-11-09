export class HeartAttackDomain {
  public sex: string;
  public diet: string;
  public age: number;
  public cholesterol: number;
  public heart_rate: number;
  public alcohol_consumption: number;
  public exercise_hours_per_week: number;
  public stress_level: number;
  public sedentary_hours_per_day: number;
  public bmi: number;
  public triglycerides: number;
  public physical_activity_days_per_week: number;
  public sleep_hours_per_day: number;

  constructor(data: any) {
    this.sex = data.sex;
    this.diet = data.diet;
    this.age = data.age;
    this.cholesterol = data.cholesterol;
    this.heart_rate = data.heart_rate;
    this.alcohol_consumption = data.alcohol_consumption;
    this.exercise_hours_per_week = data.exercise_hours_per_week;
    this.stress_level = data.stress_level;
    this.sedentary_hours_per_day = data.sedentary_hours_per_day;
    this.bmi = data.bmi;
    this.triglycerides = data.triglycerides;
    this.physical_activity_days_per_week = data.physical_activity_days_per_week;
    this.sleep_hours_per_day = data.sleep_hours_per_day;
  }
}
