import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import { Dispatch, SetStateAction } from "react";
import { Exp } from "../../types/index";
import styledInputComponent from "../hoc/styledInputComponent";

interface SwitchInputProps {
  dataKey: string;
  itemState: Exp;
  setItemState: Dispatch<SetStateAction<Exp>>;
}

const StyleSwitch = styledInputComponent(Switch, false);

const SwitchInput = ({
  dataKey,
  itemState,
  setItemState,
}: SwitchInputProps) => (
  <StyleSwitch
    checked={!!itemState[dataKey as keyof Exp]}
    onChange={(
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const tempItem: Exp = { ...itemState };
      tempItem[dataKey as keyof Exp] = !tempItem[dataKey as keyof Exp] as never;
      setItemState(tempItem);
    }}
  />
);

export default SwitchInput;
