/* eslint-disable react/prop-types */
import "./Text.css";

export default function Text({ yes }) {
  return (
    <p className="text">
      {yes ? "Ma bedichou d'amour !!" : "Est-ce que tu veux être ma bedichou ?"}
    </p>
  );
}
