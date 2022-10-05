import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";
import styledInputComponent from "../hoc/styledInputComponent";

interface TextInputProps {
  placeHolder: string;
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
}

const StyledOutlinedInput = styledInputComponent(OutlinedInput, true);

const TextInput = ({
  placeHolder,
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
      tempItem[dataKey as keyof Exp] = e.target.value as never;
      setItemState(tempItem);
    }}
    placeholder={placeHolder}
  />
);

export default TextInput;
