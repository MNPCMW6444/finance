import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";
import styledInputComponent from "../hoc/styledInputComponent";

interface TextInputProps {
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
  min: number;
  max: number;
  pts: number;
  dollar: boolean;
}

const StyledOutlinedInput = styledInputComponent(OutlinedInput, true);

const TextInput = ({
  min,
  max,
  pts,
  dollar,
  dataKey,
  itemState,
  setItemState,
}: TextInputProps) => (
  <StyledOutlinedInput
    value={itemState[dataKey as keyof Exp]}
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem = { ...itemState };
      let validated: number = parseFloat(e.target.value);
      if (validated === NaN) validated = 0;
      if (validated > max) validated = max;
      if (validated < min) validated = min;
      validated = Math.round(validated * 10 ** pts) / 10 ** pts;
      if (validated === NaN) validated = 0;
      tempItem[dataKey as keyof Exp] = validated as never;
      setItemState(tempItem);
    }}
    type="number"
    endAdornment={dollar && <InputAdornment position="end">$</InputAdornment>}
  />
);

export default TextInput;
