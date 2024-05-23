import { useMutationBuy } from "./buy/buy.query";
import { useMutationSell } from "./sell/sell.query";
export const RegisterApi = {
  buy: useMutationBuy,
  sell: useMutationSell,
};
