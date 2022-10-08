import { createContext, useState, useEffect } from "react";
import InventoryManagement from "../inventoryManagement/screens/summarizedManager/InventoryManagement";
import MainDashboard from "../mainDashboard/MainDashboard";
import AdminEditLogs from "../adminEditLogs/AdminEditLogs";
import UsersAndPermissions from "../usersAndPermissions/UsersAndPermissions";

const ScreenContext = createContext({
  selectedScreen: "Inventory Management",
  setSelectedScreen: () => {},
  screen: <InventoryManagement />,
});

export function ScreenContextProvider(props) {
  const [selectedScreen, setSelectedScreen] = useState("Inventory Management");
  const [screen, setScreen] = useState(<InventoryManagement />);

  useEffect(() => {
    console.log("go");
    switch (selectedScreen) {
      case "Main Dashboard":
        setScreen(<MainDashboard />);
        break;
      case "Inventory Management":
        setScreen(<InventoryManagement />);
        break;
      case "Admin Edit Logs":
        setScreen(<AdminEditLogs />);
        break;
      case "Users & Permissions":
        setScreen(<UsersAndPermissions />);
        break;
    }
  }, [selectedScreen]);

  return (
    <ScreenContext.Provider
      value={{
        selectedScreen: selectedScreen,
        setSelectedScreen: setSelectedScreen,
        screen: screen,
      }}
    >
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
