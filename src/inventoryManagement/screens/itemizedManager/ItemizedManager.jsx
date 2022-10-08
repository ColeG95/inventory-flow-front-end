import { useLocation } from "react-router-dom";
import DropdownFilter from "./components/DropdownFilter";
import { DUMMY_ITEMS } from "../../../DUMMY_DATA";
import { useEffect, useState } from "react";

// city, name, status
function ItemizedManager() {
  const ogSelectedItem = useLocation().state.selectedItem;
  const [item, setItem] = useState();

  useEffect(() => {
    if (ogSelectedItem) {
      setItem(ogSelectedItem);
    }
    console.log("useEffect");
  }, []);

  return (
    <div>
      <DropdownFilter
        hint="Item Name"
        choices=""
        selectedChoice={item}
        setSelectedChoice={setItem}
      />
    </div>
  );
}

export default ItemizedManager;
