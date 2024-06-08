// styles
import "./Grid.css";

// chartjs
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

// imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// typescript import
import { employeeData } from "../vite-env";

// images
import newTab from "../assets/newTab.svg";

export default function Grid({ data }: { data: employeeData[] }) {
  const navigate = useNavigate();

  // Row Data: The data to be displayed.

  const [rowData] = useState(
    data.map((item, index) => {
      return {
        Id: index + 1,
        Name: item.name,
        Role: item.role,
        Email: item.email,
        Age: item.age,
        Active: item.activeDays.days + " days",
        Burnout: item.activeDays.isBurnOut ? "Yes" : "No",
      };
    })
  );

  // @ts-ignore
  const CustomButtonComponent = (props) => {
    return (
      <button
        onClick={() => {
          navigate(`/employee/${props.data.Id - 1}`);
        }}
      >
        <img src={newTab} alt="navigation" />
      </button>
    );
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
    { field: "Id", maxWidth: 50 },
    { field: "Link", cellRenderer: CustomButtonComponent, maxWidth: 100 },
    { field: "Name", filter: true, maxWidth: 185 },
    { field: "Role", maxWidth: 210 },
    { field: "Email" },
    { field: "Age", maxWidth: 90 },
    { field: "Active", maxWidth: 125 },
    { field: "Burnout", maxWidth: 125 },
  ]);

  const autoSizeStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 100,
  };

  return (
    <div
      className="grid ag-theme-quartz" // applying the grid theme
    >
      {/* @ts-ignore */}
      <AgGridReact
        autoSizeStrategy={autoSizeStrategy}
        allowDragFromColumnsToolPanel={false}
        domLayout="autoHeight"
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
}
