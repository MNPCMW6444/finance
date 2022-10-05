import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Item } from "../../types/index";

interface DateInputProps {
  dataKey: string;
  itemState: Item;
  setItemState: Dispatch<SetStateAction<Item>>;
}

const DateInput = ({ dataKey, itemState, setItemState }: DateInputProps) => (
  <OutlinedInput
    value={
      itemState[dataKey as keyof Item] &&
      new Date(itemState[dataKey as keyof Item]).toISOString().substring(0, 10)
    }
    type="date"
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem = { ...itemState };
      tempItem[dataKey as keyof Item] = e.target.value;
      setItemState(tempItem);
    }}
  />
);

export default DateInput;
