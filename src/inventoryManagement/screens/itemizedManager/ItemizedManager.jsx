import { useLocation } from "react-router-dom";
import DropdownFilter from "./components/DropdownFilter";
import { DUMMY_ITEMS } from "../../../DUMMY_DATA";
import { useEffect, useState } from "react";
import "./ItemizedManager.css";
import ItemsTable from "./components/table/ItemsTable";

// city, name, status
function ItemizedManager() {
  const ogSelectedItem = useLocation().state.selectedItem;
  const [name, setName] = useState("");
  const [items, setItems] = useState(DUMMY_ITEMS);
  let nameChoices = [];

  useEffect(() => {
    if (ogSelectedItem) {
      setName(ogSelectedItem);
    }
    console.log("useEffect");
    filterName();
  }, []);

  function getNameChoices() {
    let names = [];
    for (let item of DUMMY_ITEMS) {
      console.log(item);
      names.push(item.name);
    }
    nameChoices = names.filter((v, i, a) => a.indexOf(v) === i);
    console.log(nameChoices);
  }

  function filterName() {}

  getNameChoices();

  return (
    <>
      <span className="filterRow">
        <DropdownFilter
          hint="Name"
          choices={nameChoices}
          selectedChoice={name}
          setSelectedChoice={setName}
        />
      </span>
      <span className="filterRow">
        <DropdownFilter
          hint="Name"
          choices={nameChoices}
          selectedChoice={name}
          setSelectedChoice={setName}
        />
      </span>
      <span>
        <DropdownFilter
          hint="Name"
          choices={nameChoices}
          selectedChoice={name}
          setSelectedChoice={setName}
        />
      </span>

      <ItemsTable />
    </>
  );
}

export default ItemizedManager;
