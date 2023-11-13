import { HeartAttackDomain } from "domain/model/heart_attack/HeartAttackDomain";
import { predict } from "infrastructure/adapter-out/heart_attack_registry_adapter/HeartAttacAdapter";
import HeartAttackPrediction from "./HeartAttackPrediction";
import { CustomError } from "utils/CustomError";
import { AxiosError, AxiosResponse } from "axios";

export function HeartAttackPredict(heartAttackData: HeartAttackDomain): any {
  return predict(heartAttackData)
    .then((res: AxiosResponse) => {
      HeartAttackPrediction(res.data);
    })
    .catch((error: AxiosError) => {
      let code = error.code !== undefined ? error.code : "500";
      const e = new CustomError(code, error.message);
      throw e;
    });
}
