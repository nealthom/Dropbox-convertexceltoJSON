import React, { useState } from "react";

import MyDropzone from "./MyDropzone";

import "./styles.css";

export default function App() {
  const [data, setData] = useState({ rows: [] });

  console.log(new Date(44138));
  return (
    <div className="App">
      <h1>Spreadsheet</h1>
      <MyDropzone set={setData} data={data} />
      {data ? JSON.stringify(data) : ""}
    </div>
  );
}
