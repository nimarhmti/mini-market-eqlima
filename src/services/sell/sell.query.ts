import { useMutation } from "@tanstack/react-query";
import { api } from "@/config/axios";
const serviceName = "/order";
interface dataModel {
  price: number | null | undefined;
  weight: number;
}
export const useMutationSell = () =>
  useMutation({
    mutationFn: (data: dataModel) => {
      return api.post(`${serviceName}/sell`, data);
    },
  });
