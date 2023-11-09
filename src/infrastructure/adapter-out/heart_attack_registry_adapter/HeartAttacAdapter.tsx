import { HeartAttackDomain } from "domain/model/heart_attack/HeartAttackDomain";
import { HeartAttackApi } from "./HeartAttackApi";
import HeartAttackRegistry from "./HeartAttackRegistry";

export const predict = async (heartAttackData: HeartAttackDomain) => {
  const heartAttackRegistry = HeartAttackRegistry(heartAttackData);
  const res = HeartAttackApi.predict(heartAttackRegistry);
  return res;
};
