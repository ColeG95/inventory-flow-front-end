import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Toggle({ selected, setSelected, choices }) {
  console.log(choices);
  const handleChoice = (event, newChoice) => {
    setSelected(newChoice);
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChoice}
      color="primary"
    >
      {choices.map((choice) => (
        <ToggleButton value={choice} aria-label={choice}>
          {choice}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default Toggle;
