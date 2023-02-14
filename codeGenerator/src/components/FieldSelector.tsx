import { Box, Typography, TextField, IconButton } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { AccessModifiers, Types, CollectionType } from "../constants/constants";
import "./style/FieldSelector.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { fieldValue } from "../interfaces/fieldValue";

interface IFieldSelector {
  rowValue: fieldValue;
  index: number;
  setEditingValue: (value: [fieldValue]) => void;
  editingValue: Array<fieldValue>;
}

export const FieldSelector = ({
  rowValue,
  index,
  setEditingValue,
  editingValue,
}: IFieldSelector) => {
  const [accessValue, setAccessValue] = useState({
    label: "default",
    value: "defalut",
  });
  const handleAccessModifierChange = (event: any, value: any) => {
    if (value) {
      setAccessValue(value);
    } else {
      setAccessValue({
        label: "default",
        value: "defalut",
      });
    }
  };

  return (
    <>
      <Typography>Field Selector</Typography>
      <div className="FiledSelectorContainer">
        <Box className="FieldBoxContainer">
          <Autocomplete
            disablePortal
            id="AccessModifiers-id"
            options={AccessModifiers()}
            sx={{ width: 300 }}
            onChange={(event, value) =>
              handleAccessModifierChange(event, value)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Access Modifier"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box className="FieldBoxContainer">
          <Autocomplete
            disablePortal
            id="DataType-id"
            options={Types()}
            sx={{ width: 300 }}
            onChange={(event, value) =>
              handleAccessModifierChange(event, value)
            }
            renderInput={(params) => (
              <TextField {...params} label="Data Types" variant="outlined" />
            )}
          />
        </Box>
        <Box className="FieldBoxContainer">
          <Autocomplete
            disablePortal
            id="CollectionType-id"
            options={CollectionType()}
            sx={{ width: 300 }}
            onChange={(event, value) =>
              handleAccessModifierChange(event, value)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Colletion Types"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box>
          <IconButton aria-label="delete" color="secondary">
            <DeleteIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
};
