import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";
import styledInputComponent from "../hoc/styledInputComponent";

interface SelectInputProps {
  dropDownOptions: string[];
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
}

const StyleSelect = styledInputComponent(Select, true);

const SelectInput = ({
  dropDownOptions,
  dataKey,
  itemState,
  setItemState,
}: SelectInputProps) => (
  <StyleSelect
    value={itemState[dataKey as keyof Exp]}
    onChange={(e) => {
      const tempItem = { ...itemState };
      tempItem[dataKey as keyof Exp] = e.target.value as never;
      setItemState(tempItem);
    }}
  >
    {dropDownOptions.map((option: string) => (
      <MenuItem value={option}>{option}</MenuItem>
    ))}
  </StyleSelect>
);

export default SelectInput;
