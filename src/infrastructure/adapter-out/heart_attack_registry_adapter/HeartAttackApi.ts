import axios, { AxiosResponse } from "axios";
import { HeartAttackDomain } from "domain/model/heart_attack/HeartAttackDomain";
import { API_URL } from "utils/Utilities";

export interface HeartAttackApiType {
  predict: Function;
}

export const HeartAttackApi: HeartAttackApiType = {
  predict: async (
    heartAttackData: HeartAttackDomain
  ): Promise<AxiosResponse> => {
    try {
      const res = await axios.post(
        API_URL + "/heart-attack/predict",
        heartAttackData
      );
      return res;
    } catch (error) {
      throw error;
    }
  },
};
