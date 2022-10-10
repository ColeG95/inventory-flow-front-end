import { useLocation } from "react-router-dom";
import DropdownFilter from "./components/DropdownFilter";
import { useEffect, useState } from "react";
import "./ItemizedManager.css";
import ItemsTable from "./components/ItemsTable";
import NewButton from "./components/buttons/NewButton";
import MoveButton from "./components/buttons/MoveButton";
import ShipButton from "./components/buttons/ShipButton";
import DeleteButton from "./components/buttons/DeleteButton";
import NewModal from "./components/NewModal";
import UpdateModal from "./components/UpdateModal";
import EditButton from "./components/buttons/EditButton";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import AreYouSure from "./components/AreYouSure";

function ItemizedManager() {
  const navSelectedItem = useLocation().state.selectedItem;
  const [nameState, setName] = useState("");
  const [cityState, setCity] = useState("");
  const [statusState, setStatus] = useState("");
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [items, setItems] = useState([]);
  const [baseItems, setBaseItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState();
  const [refetch, setRefetch] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  let nameChoices = [];
  let cityChoices = [];
  let statusChoices = [];

  useEffect(() => {
    axios.get("http://localhost:9000/item").then((res) => {
      setBaseItems(res.data);
      setItems(res.data);
    });
    if (refetch === 0) {
      if (navSelectedItem) {
        setName(navSelectedItem);
      }
      mainFilter(navSelectedItem, "name");
    }
  }, [refetch]);

  function getChoices() {
    let names = [];
    let cities = [];
    let statuses = [];
    for (let item of baseItems) {
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
    let localItems = [...baseItems];
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
      {items.length === 0 && <CircularProgress className="spinner" />}
      {items.length > 0 && (
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
          <NewButton setShowModal={setShowNewModal} />
          {/* <MoveButton /> */}
          {/* <ShipButton /> */}
          <EditButton
            setShowModal={setShowEditModal}
            selectedItem={selectedItemId}
          />
          <DeleteButton setShowAlert={setShowAlert} />
        </div>
      )}
      {items.length > 0 && (
        <ItemsTable
          items={items}
          selectedItem={selectedItemId}
          setSelectedItem={setSelectedItemId}
          setShowAlert={setShowAlert}
        />
      )}
      <AreYouSure
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
        setRefetch={setRefetch}
      />
      <NewModal
        showModal={showNewModal}
        setShowModal={setShowNewModal}
        nameChoices={nameChoices}
        cityChoices={cityChoices}
        statusChoices={statusChoices}
        setRefetch={setRefetch}
      />
      {selectedItemId && selectedItemId !== "" && (
        <UpdateModal
          selectedItem={items.find((item) => item.id === selectedItemId)}
          selectedId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
          showModal={showEditModal}
          setShowModal={setShowEditModal}
          nameChoices={nameChoices}
          cityChoices={cityChoices}
          statusChoices={statusChoices}
          setRefetch={setRefetch}
        />
      )}
    </>
  );
}

export default ItemizedManager;
