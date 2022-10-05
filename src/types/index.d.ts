interface Exp {
  type: string;
  amount: number;
  isOneTime: boolean;
  oneTimeDate: Date;
  monthly: boolean;
  reqTimeDay: number;
  reqTimeMonth: number;
  department: string;
  more: string;
}

export type { Exp };
