import React, { useEffect, useState } from "react";
import './inventory.css';
import axios from "../../../api/axios";

function Inventory() {
  const [hwSet1Availability, setHwSet1Availability] = useState(null);
  const [hwSet2Availability, setHwSet2Availability] = useState(null);
  const [hwSet1Input, setHwSet1Input] = useState("");
  const [hwSet2Input, setHwSet2Input] = useState("");
  const [message, setMessage] = useState("");
  

  useEffect(() => {
    async function fetchAvailability() {
      try {
        const response = await axios.get("/api/availability");
        setHwSet1Availability(response.data.HWSet1_available);
        setHwSet2Availability(response.data.HWSet2_available);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAvailability();
  }, []);

  const handleCheckIn = (set, input) => {
    if(set === "hwSet1") {
      const checkinbtn = document.querySelector(".hwset1-checkin-button");
      checkinbtn.innerHTML = "Checking in..."
      checkinbtn.setAttribute("disabled", true)
      axios.post("/api/checkin_HWSet1", {
        qty: input
      })
      .then((response) => {
        if(response.data['success'] === true){
          setHwSet1Availability((prev) => prev + parseInt(input));
          setMessage("Succesfully checked in " + input + " hardware")
          checkinbtn.removeAttribute('disabled')
          checkinbtn.innerHTML = 'Check In'
        }
        else if (response.data['success'] === false) {
          if(response.data['message'] === "qty checked in exceeds capacity"){
            setMessage(input + " hardware exceeds capacity. Please try again.")
            checkinbtn.removeAttribute('disabled')
            checkinbtn.innerHTML = 'Check In'
          }
        }
      })
    }
    
  };

  const handleCheckOut = (set, input) => {
    const availability = set === "hwSet1" ? hwSet1Availability : hwSet2Availability;
    if (parseInt(input) > availability) {
      setMessage(`Not enough available, please enter a lower quantity (availability: ${availability})`);
      return;
    }
    if (set === "hwSet1") {
      setHwSet1Availability((prev) => prev - parseInt(input));
      setHwSet1Input("");
    } else {
      setHwSet2Availability((prev) => prev - parseInt(input));
      setHwSet2Input("");
    }
    setMessage("");
  };


  const handleHwSet1InputChange = (event) => {
    setHwSet1Input(event.target.value);
  };

  const handleHwSet2InputChange = (event) => {
    setHwSet2Input(event.target.value);
  };

  return (
    <div>
      <h1>Inventory</h1>
      <div>
        <h3>Hardware Set 1</h3>
        <p>Availability: {hwSet1Availability}/100</p>
        <input className="inventory-container"
          type="number"
          min="0"
          max="100"
          value={hwSet1Input}
          onChange={handleHwSet1InputChange}
        />
        <button
          className="hwset1-checkin-button"
          sx={{
            backgroundColor: 'lightgray',
            color: 'black',
            textTransform: 'none',
            borderRadius: '0',
            width: '100px',
            height: '50px',
            fontSize: '1.2rem',
            marginLeft: '8px',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
          onClick={() => handleCheckIn("hwSet1", hwSet1Input)}
        >
          Check In
        </button>
        <button onClick={() => handleCheckOut("hwSet1", hwSet1Input)}>
          Check Out
        </button>
      </div>
      <div>
        <h3>Hardware Set 2</h3>
        <p>Availability: {hwSet2Availability}/100</p>
        <input
          type="number"
          min="0"
          max="100"
          value={hwSet2Input}
          onChange={handleHwSet2InputChange}
        />
        <button onClick={() => handleCheckIn("hwSet2", hwSet2Input)}>
          Check In
        </button>
        <button onClick={() => handleCheckOut("hwSet2", hwSet2Input)}>
          Check Out
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Inventory;