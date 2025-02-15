import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [retrievedData, setRetrievedData] = useState(null);
  const token = localStorage.getItem("token");

  const saveData = async () => {
    try {
      await axios.post("http://localhost:5000/save", { data }, { headers: { Authorization: `Bearer ${token}` } });
      alert("Data saved");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const readData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/read", { headers: { Authorization: `Bearer ${token}` } });
      setRetrievedData(data);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <textarea onChange={(e) => setData(e.target.value)}></textarea>
      <button onClick={saveData}>Save</button>
      <button onClick={readData}>Read</button>
      {retrievedData && <pre>{JSON.stringify(retrievedData, null, 2)}</pre>}
    </div>
  );
};

export default Dashboard;
