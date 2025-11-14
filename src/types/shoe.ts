export interface SoleOption {
  id: string;
  name: string;
  color: string;
}

export interface TopOption {
  id: string;
  name: string;
  color: string;
}

export interface ShoeCustomization {
  sole: SoleOption;
  top: TopOption;
}

export interface OrderData {
  customerName: string;
  customerEmail: string;
  soleColor: string;
  topColor: string;
}
