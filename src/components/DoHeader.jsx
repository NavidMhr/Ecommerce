import React from "react";

export default function Header(props) {
  const [inputValue, setInputValue] = React.useState('');

  function handleBtn(event) {
    event.preventDefault();
    props.AddBtn();
    setInputValue(''); 
  }

  function hanldeInput(event) {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    props.TaskNameChange(newInputValue);
  }

  return (
    <form className="Form">
      <input
        className="Add-input"
        onChange={hanldeInput}
        type="text"
        value={inputValue}
        placeholder="Add A New Task"
      />
      <button className="Add-btn" onClick={handleBtn} type="button">
        Add
      </button>
    </form>
  );
}
