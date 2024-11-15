import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FaceIcon from "@mui/icons-material/Face";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";

function Shipments() {
  const [data, setData] = useState();
  const handleClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("active");
  };
  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="shipment-container">
      <button onClick={handleClick} className="menu-icon">
        <MenuIcon className="menu-icon" />
      </button>
      <header className="shipment-header">
        <h1>SHIPMENTS</h1>
        <nav>
          <ul>
            <li>
              <AccessTimeIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <FaceIcon />
            </li>
          </ul>
        </nav>
        <search className="search-bar">
          <input type="text" placeholder="Search for shipments..." />
        </search>
      </header>
      <div className="shipment-main">
        <div className="options">
          <ul className="shipment-types">
            <li>All Shipments</li>
            <li>Sea Freight</li>
            <li>Air Freight</li>
          </ul>
          <ul className="shipment-control">
            <li>
              <AddIcon />
              <span>Add Shipment</span>
            </li>
            <li>
              <CalendarMonthIcon />
              <span>All Time</span>
            </li>
          </ul>
        </div>
        <div className="table-container">
          <table className="shipment-table">
            <thead>
              <tr>
                <th>Shipment ID</th>
                <th>Commodity</th>
                <th>Destination</th>
                <th>Type</th>
                <th>Gross Weight</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.commodity}</td>
                  <td>{item.destination}</td>
                  <td>{item.type}</td>
                  <td>{item.GrossWeight}</td>
                  <td className="generate-tender">Generate Tender</td>
                  <td className="status">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Shipments;
