import React, { useState } from "react";
import Form from "./Form"
import DisplayData from "./DisplayData";

function NumberInput() {
    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);
  
    function handleNumberChange(event) {
      const newNumber = parseInt(event.target.value);
      if (newNumber >= 0 && newNumber <= 5) {
        setNumber(newNumber);
        setIsInvalidNumber(null);
      } else {
        setIsInvalidNumber(`${newNumber} is not a valid number!`);
      }
    }
  
    return (
      <form>
        <input type="number" value={number} onChange={handleNumberChange} />
        {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      </form>
    );

}

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Soto");


    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        console.log(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    return (
        <div>
            <Form
                fistName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
            <NumberInput />
        </div>
    );
}

export default ParentComponent;