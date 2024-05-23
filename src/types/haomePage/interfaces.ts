//--------------form interfaces and typeS
export interface formProps {
  onCloseModal: () => void;
  lastPrice: number | undefined | null;
  name: "buy" | "sell";
}
export interface valueModel {
  weight: number;
  errorMessage: string;
}
//--------------other sections interfaces and typeS
export interface cardProps {
  label: string;
  price: number | null;
  isLoading?: boolean;
  name: "buy" | "sell";
}
