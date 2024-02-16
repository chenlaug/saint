/* eslint-disable react/prop-types */
import "./BtnYes.css";

export default function BtnYes({ setYes }) {
  return (
    <input
      className="btnYes"
      type="button"
      value="Oui"
      onClick={() => setYes(true)}
    />
  );
}
