import { FieldSelector } from "./components/FieldSelector";
import { InputClassName } from "./components/InputClassName";
import "./App.css";
import { Box, Button, IconButton } from "@material-ui/core";
import { useState } from "react";
import { fieldValue } from "./interfaces/fieldValue";
import AddIcon from "@mui/icons-material/Add";

const fristField: fieldValue = {
  accessModifier: "",
  dataType: "",
  collectionTyoe: "",
};

const App = () => {
  const [editingValue, setEditingValue] = useState([fristField]);
  return (
    <div className="App">
      <InputClassName />
      {editingValue.map((row, index) => (
        <FieldSelector
          rowValue={row}
          index={index}
          editingValue={editingValue}
          setEditingValue={setEditingValue}
        />
      ))}

      <Box>
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      </Box>
      <div>
        <Button color="primary" variant="contained">
          Render
        </Button>
      </div>
    </div>
  );
};

export default App;
