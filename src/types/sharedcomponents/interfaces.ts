export interface dialogPropsType {
  isOpen: boolean;
  onOpenHandler: () => void;
  children?: React.ReactNode;
  window?: () => Window | number;
}

export type modalPropsType = Omit<dialogPropsType, "window">;

export interface drawerPropsType extends dialogPropsType {
  drawerBleeding: number;
  container: any;
}

