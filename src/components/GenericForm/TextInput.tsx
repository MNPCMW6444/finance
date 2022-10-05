import OutlinedInput from "@mui/material/OutlinedInput";
import { Dispatch, SetStateAction } from "react";
import { Item } from "../../types/index";

interface TextInputProps {
  placeHolder: string;
  dataKey: string;
  itemState: Item;
  setItemState: Dispatch<SetStateAction<Item>>;
}

const TextInput = ({
  placeHolder,
  dataKey,
  itemState,
  setItemState,
}: TextInputProps) => (
  <OutlinedInput
    value={itemState[dataKey as keyof Item]}
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem = { ...itemState };
      tempItem[dataKey as keyof Item] = e.target.value;
      setItemState(tempItem);
    }}
    placeholder={placeHolder}
  />
);

export default TextInput;
