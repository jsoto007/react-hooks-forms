import React, { useState } from "react";

function Form({
  firstName, 
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  const [newsletter, setNewsletter] = useState(false);

 
  function handleNewsLetterChange(event) {
    setNewsletter(event.target.checked);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsLetterChange}
        checked={newsletter}
      />
      <button type="submiy">Submit</button>
    </form>
    </div>
  );
}

export default Form;
