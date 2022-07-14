import Button from "./Button"

const Tracker = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" color={showAdd ? "red" :"green"}  text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
}

export default Tracker
