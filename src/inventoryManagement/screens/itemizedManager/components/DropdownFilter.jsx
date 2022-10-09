import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./DropdownFilter.css";

function DropdownFilter({
  hint,
  choices,
  selectedChoice,
  setSelectedChoice,
  filter,
}) {
  const handleChange = (event) => {
    setSelectedChoice(event.target.value);
    filter(event.target.value, hint.toLowerCase());
    console.log("filter");
  };

  return (
    <div>
      <FormControl className="dropdown" sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{hint}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedChoice}
          onChange={handleChange}
          label={hint}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {choices.map((choice) => (
            <MenuItem value={choice} key={choice}>
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropdownFilter;
