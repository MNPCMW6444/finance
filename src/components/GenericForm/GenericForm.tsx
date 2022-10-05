import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Exp } from "../../types/index";
import Button from "@mui/material/Button";
import Axios from "axios";
import domain from "../../config/domain";
import fieldsConfig from "../../config/fields";
import InputLabel from "@mui/material/InputLabel";
import { ItemTypes } from "../../utils/enums";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { Typography } from "@mui/material";
import selectButton from "../CalendarButton/CalendarButton";
import DateInput from "./DateInput";
import SwitchInput from "./SwitchInput";
import NumberInput from "./NumberInput";

interface GenericFormProps {
  closeForm: () => void;
  item: Exp;
  refresh: () => void;
}

const fieldStyle = { width: "70%" };

const controlButtonStyle = { width: "100px" };

const GenericForm = ({ closeForm, item, refresh }: GenericFormProps) => {
  const [type, setType] = useState<string>(item.type || ItemTypes.exp);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [itemState, setItemState] = useState<Exp>(item);

  const fieldsArray = fieldsConfig.get(type);

  const handleFormSend = async () => {
    try {
      item._id
        ? await Axios.put(domain + "edit" + type + "/" + itemState._id, {
            newItem: itemState,
          })
        : await Axios.post(domain + "create" + type, {
            newItem: itemState,
          });
      closeForm();
      refresh();
    } catch (err: any) {
      setErrorMessage(err.response.data.erroMsg);
    }
  };

  return (
    <Grid container direction="column" rowSpacing={6} alignItems="center">
      <Grid item container justifyContent="center" columnSpacing={0.5}>
        {Object.values(ItemTypes).map((option) => {
          const SelectButton = selectButton(option, type === option);
          return (
            (!item.type || item.type === option) && (
              <Grid item>
                <SelectButton onClick={() => setType(option)} />
              </Grid>
            )
          );
        })}
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        spacing={2}
        width="40vw"
        minWidth="540px"
      >
        {itemState &&
          fieldsArray &&
          Array.from(fieldsArray, ([key, props]) => ({
            key,
            ...props,
          })).map(
            (
              {
                key,
                label,
                placeHolder,
                /* dropDownOptions, */ datePicker,
                check,
                min,
                max,
                pts,
                dollar,
              },
              index: number
            ) => {
              const special: boolean = !(
                ((key === "reqTimeDay" ||
                  key === "reqTimeMonth" ||
                  key === "monthly") &&
                  itemState.isOneTime) ||
                (key === "reqTimeMonth" && itemState.monthly)
              );
              return (
                special && (
                  <Grid
                    item
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    key={index}
                  >
                    <Grid item>
                      <InputLabel>{label + ": "}</InputLabel>
                    </Grid>
                    <Grid item sx={fieldStyle}>
                      {placeHolder ? (
                        <TextInput
                          placeHolder={placeHolder}
                          dataKey={key}
                          itemState={itemState}
                          setItemState={setItemState}
                        /> /* : dropDownOptions ? (
                      <SelectInput
                        dropDownOptions={dropDownOptions}
                        dataKey={key}
                        itemState={itemState}
                        setItemState={setItemState}
                      />
                    ) */
                      ) : check ? (
                        <SwitchInput
                          dataKey={key}
                          itemState={itemState}
                          setItemState={setItemState}
                        />
                      ) : min || min === 0 ? (
                        <NumberInput
                          dataKey={key}
                          itemState={itemState}
                          setItemState={setItemState}
                          min={min}
                          max={max}
                          pts={pts}
                          dollar={dollar}
                        />
                      ) : (
                        datePicker && (
                          <DateInput
                            dataKey={key}
                            itemState={itemState}
                            setItemState={setItemState}
                          />
                        )
                      )}
                    </Grid>
                  </Grid>
                )
              );
            }
          )}
      </Grid>
      <Grid item container justifyContent="center" columnSpacing={1}>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleFormSend}
            sx={controlButtonStyle}
          >
            Save
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={controlButtonStyle}
            variant="outlined"
            color="error"
            onClick={() => closeForm()}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Grid item justifyContent="center">
        <Typography style={{ color: "red" }}>{errorMessage}</Typography>
      </Grid>
    </Grid>
  );
};

export default GenericForm;
