import React, { useEffect, useState } from "react";
// import './inventory.css';
import NavBarElements from '../navbarElements';
import axios from "../../../api/axios";

function Inventory() {
  const [hwSet1Availability, setHwSet1Availability] = useState(null);
  const [hwSet2Availability, setHwSet2Availability] = useState(null);
  const [hwSet1Input, setHwSet1Input] = useState("");
  const [hwSet2Input, setHwSet2Input] = useState("");
  const [hwset1_message, set_hwset1_Message] = useState("");
  const [hwset2_message, set_hwset2_Message] = useState("");

  

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
      if(input === ''){
        set_hwset1_Message("Please enter a valid number to check in.")
        checkinbtn.removeAttribute('disabled')
        checkinbtn.innerHTML = 'Check In'
      }
      axios.post("/api/checkin_HWSet1", {
        qty: input
      })
      .then((response) => {
        if(response.data['success'] === true){
          setHwSet1Availability((prev) => prev + parseInt(input));
          set_hwset1_Message("Succesfully checked in " + input + " hardware into Hardware Set 1")
          checkinbtn.removeAttribute('disabled')
          checkinbtn.innerHTML = 'Check In'
        }
        else if (response.data['success'] === false) {
          if(response.data['message'] === "qty checked in exceeds capacity"){
            set_hwset1_Message(input + " hardware exceeds Hardware Set 1 capacity. Please try again.")
            checkinbtn.removeAttribute('disabled')
            checkinbtn.innerHTML = 'Check In'
          }
          if(response.data['message'] === "invalid value"){
            set_hwset1_Message("Sorry, you can't check in " + input + " hardware. Try again with a number above 0.")
            checkinbtn.removeAttribute('disabled')
            checkinbtn.innerHTML = 'Check In'
          }
        }
      })
    }
    if(set === "hwSet2") {
      console.log("not working")
      const checkinbtn2 = document.querySelector(".hwset2-checkin-button");
      checkinbtn2.innerHTML = "Checking in..."
      checkinbtn2.setAttribute("disabled", true)
      if(input === ''){
        set_hwset2_Message("Please enter a valid number to check out.")
        checkinbtn2.removeAttribute('disabled')
        checkinbtn2.innerHTML = 'Check In'
      }
      axios.post("/api/checkin_HWSet2", {
        qty: input
      })
      .then((response) => {
        if(response.data['success'] === true){
          setHwSet2Availability((prev) => prev + parseInt(input));
          set_hwset2_Message("Succesfully checked in " + input + " hardware into Hardware Set 2.")
          checkinbtn2.removeAttribute('disabled')
          checkinbtn2.innerHTML = 'Check In'
        }
        else if (response.data['success'] === false) {
          if(response.data['message'] === "qty checked in exceeds capacity"){
            set_hwset2_Message(input + " hardware exceeds Hardware Set 2 capacity. Please try again.")
            checkinbtn2.removeAttribute('disabled')
            checkinbtn2.innerHTML = 'Check In'
          }
          if(response.data['message'] === "invalid value"){
            set_hwset2_Message("Sorry, you can't check in " + input + " hardware. Try again with a number above 0.")
            checkinbtn2.removeAttribute('disabled')
            checkinbtn2.innerHTML = 'Check In'
          }
        }
      })
    }
  };

  const handleCheckOut = (set, input) => {
    if(set === "hwSet1") {
      const checkoutbtn = document.querySelector(".hwset1-checkout-button");
      checkoutbtn.innerHTML = "Checking out..."
      checkoutbtn.setAttribute("disabled", true)
      if(input === ''){
        set_hwset1_Message("Please enter a valid number to check out.")
        checkoutbtn.removeAttribute('disabled')
        checkoutbtn.innerHTML = 'Check Out'
      }
      axios.post("/api/checkout_HWSet1", {
        qty: input
      })
      .then((response) => {
        if(response.data['success'] === true){
          setHwSet1Availability((prev) => prev - parseInt(input));
          set_hwset1_Message("Succesfully checked out " + input + " hardware from Hardware Set 1")
          checkoutbtn.removeAttribute('disabled')
          checkoutbtn.innerHTML = 'Check Out'
        }
        else if (response.data['success'] === false) {
          if(response.data['message'] === "qty checked out exceeds available hardware"){
            set_hwset1_Message(input + " hardware exceeds Hardware Set 1 availability. Please try again.")
            checkoutbtn.removeAttribute('disabled')
            checkoutbtn.innerHTML = 'Check Out'
          }
          if(response.data['message'] === "invalid value"){
            set_hwset1_Message("Sorry, you can't check out " + input + " hardware. Try again with a number above 0.")
            checkoutbtn.removeAttribute('disabled')
            checkoutbtn.innerHTML = 'Check Out'
          }
        }
      })
    }
    if(set === "hwSet2") {
      console.log("not working")
      const checkoutbtn2 = document.querySelector(".hwset2-checkout-button");
      checkoutbtn2.innerHTML = "Checking out..."
      checkoutbtn2.setAttribute("disabled", true)
      if(input === ''){
        set_hwset2_Message("Please enter a valid number to check out.")
        checkoutbtn2.removeAttribute('disabled')
        checkoutbtn2.innerHTML = 'Check Out'
      }
      axios.post("/api/checkout_HWSet2", {
        qty: input
      })
      .then((response) => {
        if(response.data['success'] === true){
          setHwSet2Availability((prev) => prev - parseInt(input));
          set_hwset2_Message("Succesfully checked out " + input + " hardware from Hardware Set 2")
          checkoutbtn2.removeAttribute('disabled')
          checkoutbtn2.innerHTML = 'Check Out'
        }
        else if (response.data['success'] === false) {
          if(response.data['message'] === "qty checked out exceeds available hardware"){
            set_hwset2_Message(input + " hardware exceeds Hardware Set 2 availability. Please try again.")
            checkoutbtn2.removeAttribute('disabled')
            checkoutbtn2.innerHTML = 'Check Out'
          }
          if(response.data['message'] === "invalid value"){
            set_hwset2_Message("Sorry, you can't check out " + input + " hardware. Try again with a number above 0.")
            checkoutbtn2.removeAttribute('disabled')
            checkoutbtn2.innerHTML = 'Check Out'
          }
        }
      })
    }
  };


  const handleHwSet1InputChange = (event) => {
    setHwSet1Input(event.target.value);
  };

  const handleHwSet2InputChange = (event) => {
    setHwSet2Input(event.target.value);
  };

  return (
    <>
      <div className="inventory-container">
        <h1 className="inventory-container">Inventory</h1>
        <div>
          <h3 align="center">Hardware Set 1</h3>
          <p align="center">Availability: {hwSet1Availability}/100</p>
          <input 
            align="center"
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
          <button
            className="hwset1-checkout-button"
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
            onClick={() => handleCheckOut("hwSet1", hwSet1Input)}
          >
            Check Out
          </button>
        </div>
        {hwset1_message && <p>{hwset1_message}</p>}
        <div>
          <h3 align="center">Hardware Set 2</h3>
          <p align="center">Availability: {hwSet2Availability}/100</p>
          <input className="inventory-container"
            type="number"
            min="0"
            max="100"
            value={hwSet2Input}
            onChange={handleHwSet2InputChange}
          />
          <button
            className="hwset2-checkin-button"
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
            onClick={() => handleCheckIn("hwSet2", hwSet2Input)}
          >
            Check In
          </button>
          <button
            className="hwset2-checkout-button"
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
            onClick={() => handleCheckOut("hwSet2", hwSet2Input)}
          >
            Check Out
          </button>
        </div>
        {hwset2_message && <p >{hwset2_message}</p>}
      </div>
    </>
  );
}

export default Inventory;