import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Card.css";
function CardDetails(){
const [number, setNumber] = useState("");
const [name, setName] = useState("");
const [expiry, setExpiry] = useState("");
const [cvc, setCvc] = useState("");
const [focus, setFocus] = useState("");

return (
  <div className="App">
    <Cards
      number={number}
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focus}
    />
      <br></br>
    <form>
      <input
        type="tel"
        name="number"
        placeholder="card Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      ></input>
      <br></br>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      ></input>
      <br></br>

      <input
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      ></input>
      <br></br>

      <input
        type="tel"
        name="cvc"
        placeholder=" CVC"
        value={cvc}
        pattern="\d{3}"
        required="true"
        onChange={(e) => setCvc(e.target.value)}
        onFocus={(e) => setFocus(e.target.name)}
      ></input>
    </form>
  </div>
);
}
export default CardDetails;