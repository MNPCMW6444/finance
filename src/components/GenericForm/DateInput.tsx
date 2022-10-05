import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";
import styledInputComponent from "../hoc/styledInputComponent";

interface DateInputProps {
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
}

const StyleOutlinedInput = styledInputComponent(OutlinedInput, true);

const DateInput = ({ dataKey, itemState, setItemState }: DateInputProps) => (
  <StyleOutlinedInput
    value={
      itemState[dataKey as keyof Exp] &&
      new Date(itemState[dataKey as keyof Exp] as Date)
        .toISOString()
        .substring(0, 10)
    }
    type="date"
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem: Exp = { ...itemState };
      tempItem[dataKey as keyof Exp] = e.target.value as never;
      setItemState(tempItem);
    }}
  />
);

export default DateInput;
