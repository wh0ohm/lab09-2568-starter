import { useState } from "react";

export default function HelloMyNamePage() {
  const [Name, setName] = useState("");
  const [Result, setResult] = useState("");
  const [isGreetOk, setGreetOk] = useState(false);
  const nameInput = (event: any) => {
    setName(event.target.value);
  };
  const greetBtnonClick = () => {
    if (Name == "") {
      setResult("Please insert your name");
      setGreetOk(false);
    } else {
      setResult(`Hello : ${Name}`);
      setName("");
      setGreetOk(true);
    }
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={Name}
      />
      <button className="btn btn-primary" onClick={greetBtnonClick}>
        Greet Me
      </button>
      {/* Result Text */}
      <p className={isGreetOk ? "" : "text-danger"}>{Result}</p>
    </div>
  );
}