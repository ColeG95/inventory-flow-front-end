import { useLocation } from "react-router-dom";
import DropdownFilter from "./components/DropdownFilter";
import { DUMMY_ITEMS } from "../../../DUMMY_DATA";
import { useEffect, useState } from "react";
import "./ItemizedManager.css";
import ItemsTable from "./components/ItemsTable";
import NewButton from "./components/buttons/NewButton";
import MoveButton from "./components/buttons/MoveButton";
import ShipButton from "./components/buttons/ShipButton";
import DeleteButton from "./components/buttons/DeleteButton";

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
    filterName();
  }, []);

  function getNameChoices() {
    let names = [];
    for (let item of DUMMY_ITEMS) {
      names.push(item.name);
    }
    nameChoices = names.filter((v, i, a) => a.indexOf(v) === i);
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
      <span className="filterRow">
        <DropdownFilter
          hint="Name"
          choices={nameChoices}
          selectedChoice={name}
          setSelectedChoice={setName}
        />
      </span>
      <NewButton className="filterRow" />
      <MoveButton className="filterRow" />
      <ShipButton className="filterRow" />
      <DeleteButton />
      <ItemsTable items={DUMMY_ITEMS} />
    </>
  );
}

export default ItemizedManager;
