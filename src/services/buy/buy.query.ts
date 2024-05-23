import { useMutation } from "@tanstack/react-query";
import { api } from "@/config/axios";
const serviceName = "/order";
export interface dataModel {
  price: number | null | undefined;
  weight: number;
}
export const useMutationBuy = () =>
  useMutation({
    mutationFn: (data: dataModel) => {
      return api.post(`${serviceName}/buy`, data);
    },
  });
