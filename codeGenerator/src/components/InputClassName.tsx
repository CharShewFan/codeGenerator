import { IconButton, TextField } from "@material-ui/core";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
export const InputClassName = () => {
  const i18n = null;
  const row = {label:"1"};
  return (
    <div>
      <TextField id="outlined-basic" label="Class Name" variant="outlined" />
      <IconButton>
        <ClearSharpIcon />
      </IconButton>

    label ={i18n[row.label]}

    </div>
  );
};
