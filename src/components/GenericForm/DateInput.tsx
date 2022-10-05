import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";

interface DateInputProps {
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
}

const DateInput = ({ dataKey, itemState, setItemState }: DateInputProps) => (
  <OutlinedInput
    value={
      itemState[dataKey as keyof Exp] &&
      new Date(itemState[dataKey as keyof Exp]).toISOString().substring(0, 10)
    }
    type="date"
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem = { ...itemState };
      tempItem[dataKey as keyof Exp] = e.target.value;
      setItemState(tempItem);
    }}
  />
);

export default DateInput;
