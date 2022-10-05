import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Dispatch, SetStateAction } from "react";
import { Item } from "../../types/index";

interface SelectInputProps {
  dropDownOptions: string[];
  dataKey: string;
  itemState: Item;
  setItemState: Dispatch<SetStateAction<Item>>;
}

const SelectInput = ({
  dropDownOptions,
  dataKey,
  itemState,
  setItemState,
}: SelectInputProps) => (
  <Select
    value={itemState[dataKey as keyof Item]}
    onChange={(e) => {
      const tempItem = { ...itemState };
      tempItem[dataKey as keyof Item] = e.target.value as string;
      setItemState(tempItem);
    }}
  >
    {dropDownOptions.map((option: string) => (
      <MenuItem value={option}>{option}</MenuItem>
    ))}
  </Select>
);

export default SelectInput;
