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
  const [nameState, setName] = useState("");
  const [cityState, setCity] = useState("");
  const [statusState, setStatus] = useState("");
  const [items, setItems] = useState(DUMMY_ITEMS);
  let nameChoices = [];
  let cityChoices = [];
  let statusChoices = [];

  // useEffect(() => {
  //   if (ogSelectedItem) {
  //     setName(ogSelectedItem);
  //   }
  //   filterName();
  // }, []);

  function getChoices() {
    let names = [];
    let cities = [];
    let statuses = [];
    for (let item of DUMMY_ITEMS) {
      names.push(item.name);
      cities.push(item.city);
      statuses.push(item.status);
    }
    nameChoices = names.filter((v, i, a) => a.indexOf(v) === i);
    cityChoices = cities.filter((v, i, a) => a.indexOf(v) === i);
    statusChoices = statuses.filter((v, i, a) => a.indexOf(v) === i);
  }

  function filterName(itemsArray, name = nameState) {
    return itemsArray.filter((v) => v.name === name);
  }

  function filterCity(itemsArray, city = cityState) {
    return itemsArray.filter((v) => v.city === city);
  }

  function filterStatus(itemsArray, status = statusState) {
    return itemsArray.filter((v) => v.status === status);
  }

  function mainFilter(value, type) {
    let localItems = [...DUMMY_ITEMS];
    if (type === "name") {
      if (value !== "") {
        localItems = filterName(localItems, value);
      }
      if (cityState !== "") {
        localItems = filterCity(localItems, cityState);
      }
      if (statusState !== "") {
        localItems = filterStatus(localItems, statusState);
      }
    } else if (type === "status") {
      if (value !== "") {
        localItems = filterStatus(localItems, value);
      }
      if (cityState !== "") {
        localItems = filterCity(localItems, cityState);
      }
      if (nameState !== "") {
        localItems = filterName(localItems, nameState);
      }
    } else if (type === "city") {
      if (value !== "") {
        localItems = filterCity(localItems, value);
      }
      if (statusState !== "") {
        localItems = filterStatus(localItems, statusState);
      }
      if (nameState !== "") {
        localItems = filterName(localItems, nameState);
      }
    }
    setItems(localItems);
  }

  getChoices();

  return (
    <>
      <div className="actions">
        <DropdownFilter
          hint="Name"
          choices={nameChoices}
          selectedChoice={nameState}
          setSelectedChoice={setName}
          filter={mainFilter}
        />
        <DropdownFilter
          hint="Status"
          choices={statusChoices}
          selectedChoice={statusState}
          setSelectedChoice={setStatus}
          filter={mainFilter}
        />
        <DropdownFilter
          hint="City"
          choices={cityChoices}
          selectedChoice={cityState}
          setSelectedChoice={setCity}
          filter={mainFilter}
        />
        <NewButton />
        <MoveButton />
        <ShipButton />
        <DeleteButton />
      </div>
      <ItemsTable items={items} />
    </>
  );
}

export default ItemizedManager;
