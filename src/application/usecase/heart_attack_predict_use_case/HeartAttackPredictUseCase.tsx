import { HeartAttackDomain } from "domain/model/heart_attack/HeartAttackDomain";
import { predict } from "infrastructure/adapter-out/heart_attack_registry_adapter/HeartAttacAdapter";

export function HeartAttackPredict(heartAttackData: HeartAttackDomain) {
  predict(heartAttackData)
    .then((res) => {
      console.log("📢 [HeartAttackPredictUseCase.tsx:8]", res);
    })
    .catch((error) => {
      console.log("📢 [HeartAttackPredictUseCase.tsx:10]", error);
    });
}
