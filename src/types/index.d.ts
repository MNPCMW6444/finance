interface Exp {
  _id: string;
  type: string;
  amount: string;
  isOneTime: boolean;
  oneTimeDate: Date;
  monthly: boolean;
  reqTimeDay: number;
  reqTimeMonth: number;
  department: string;
  more: string;
}

export type { Exp };
