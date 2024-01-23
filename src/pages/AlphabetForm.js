import React, { useState } from "react";
import "../styles/AlphabetForm.css";
import setLettersToGlobal from "../functions/HelperFunctions/setLettersToGlobal";
import getLettersFromGlobal from "../functions/HelperFunctions/getLettersFromGlobal";

function AlphabetForm() {
  const [values, setValues] = useState(getLettersFromGlobal);
  const [submitted, setSubmitted] = useState(false);
  const handleAInputChange = (event) => {
    setValues({ ...values, A: event.target.value });
  };
  const handleBInputChange = (event) => {
    setValues({ ...values, B: event.target.value });
  };
  const handleCInputChange = (event) => {
    setValues({ ...values, C: event.target.value });
  };
  const handleDInputChange = (event) => {
    setValues({ ...values, D: event.target.value });
  };
  const handleEInputChange = (event) => {
    setValues({ ...values, E: event.target.value });
  };
  const handleFInputChange = (event) => {
    setValues({ ...values, F: event.target.value });
  };
  const handleGInputChange = (event) => {
    setValues({ ...values, G: event.target.value });
  };
  const handleHInputChange = (event) => {
    setValues({ ...values, H: event.target.value });
  };
  const handleIInputChange = (event) => {
    setValues({ ...values, I: event.target.value });
  };
  const handleJInputChange = (event) => {
    setValues({ ...values, J: event.target.value });
  };
  const handleKInputChange = (event) => {
    setValues({ ...values, K: event.target.value });
  };
  const handleLInputChange = (event) => {
    setValues({ ...values, L: event.target.value });
  };
  const handleMInputChange = (event) => {
    setValues({ ...values, M: event.target.value });
  };
  const handleNInputChange = (event) => {
    setValues({ ...values, N: event.target.value });
  };
  const handleOInputChange = (event) => {
    setValues({ ...values, O: event.target.value });
  };
  const handlePInputChange = (event) => {
    setValues({ ...values, P: event.target.value });
  };
  const handleQInputChange = (event) => {
    setValues({ ...values, Q: event.target.value });
  };
  const handleRInputChange = (event) => {
    setValues({ ...values, R: event.target.value });
  };
  const handleSInputChange = (event) => {
    setValues({ ...values, S: event.target.value });
  };
  const handleTInputChange = (event) => {
    setValues({ ...values, T: event.target.value });
  };
  const handleUInputChange = (event) => {
    setValues({ ...values, U: event.target.value });
  };
  const handleVInputChange = (event) => {
    setValues({ ...values, V: event.target.value });
  };
  const handleWInputChange = (event) => {
    setValues({ ...values, W: event.target.value });
  };
  const handleXInputChange = (event) => {
    setValues({ ...values, X: event.target.value });
  };
  const handleYInputChange = (event) => {
    setValues({ ...values, Y: event.target.value });
  };
  const handleZInputChange = (event) => {
    setValues({ ...values, Z: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setLettersToGlobal(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="alphabet-label">
          A:
          <input
            className="alphabet-input"
            onChange={handleAInputChange}
            value={values.A}
            name="A"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          B:
          <input
            className="alphabet-input"
            onChange={handleBInputChange}
            value={values.B}
            name="B"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          C:
          <input
            className="alphabet-input"
            onChange={handleCInputChange}
            value={values.C}
            name="C"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          D:
          <input
            className="alphabet-input"
            onChange={handleDInputChange}
            value={values.D}
            name="D"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          E:
          <input
            className="alphabet-input"
            onChange={handleEInputChange}
            value={values.E}
            name="E"
            placeholder="0"
            type="number"
          />
        </label>
        <label className="alphabet-label">
          F
          <input
            className="alphabet-input"
            onChange={handleFInputChange}
            value={values.F}
            name="F"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          G:
          <input
            className="alphabet-input"
            onChange={handleGInputChange}
            value={values.G}
            name="G"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          H:
          <input
            className="alphabet-input"
            onChange={handleHInputChange}
            value={values.H}
            name="H"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          I:
          <input
            className="alphabet-input"
            onChange={handleIInputChange}
            value={values.I}
            name="I"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          J:
          <input
            className="alphabet-input"
            onChange={handleJInputChange}
            value={values.J}
            name="J"
            placeholder="0"
            type="number"
          />
        </label>
        <label className="alphabet-label">
          K:
          <input
            className="alphabet-input"
            onChange={handleKInputChange}
            value={values.K}
            name="K"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          L:
          <input
            className="alphabet-input"
            onChange={handleLInputChange}
            value={values.L}
            name="L"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          M:
          <input
            className="alphabet-input"
            onChange={handleMInputChange}
            value={values.M}
            name="M"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          N:
          <input
            className="alphabet-input"
            onChange={handleNInputChange}
            value={values.N}
            name="N"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          O:
          <input
            className="alphabet-input"
            onChange={handleOInputChange}
            value={values.O}
            name="O"
            placeholder="0"
            type="number"
          />
        </label>
        <label className="alphabet-label">
          P:
          <input
            className="alphabet-input"
            onChange={handlePInputChange}
            value={values.P}
            name="P"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          Q:
          <input
            className="alphabet-input"
            onChange={handleQInputChange}
            value={values.Q}
            name="Q"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          R:
          <input
            className="alphabet-input"
            onChange={handleRInputChange}
            value={values.R}
            name="R"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          S:
          <input
            className="alphabet-input"
            onChange={handleSInputChange}
            value={values.S}
            name="S"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          T:
          <input
            className="alphabet-input"
            onChange={handleTInputChange}
            value={values.T}
            name="T"
            placeholder="0"
            type="number"
          />
        </label>
        <label className="alphabet-label">
          U:
          <input
            className="alphabet-input"
            onChange={handleUInputChange}
            value={values.U}
            name="U"
            placeholder="0"
            type="number"
          />
        </label>
        <label className="alphabet-label">
          V:
          <input
            className="alphabet-input"
            onChange={handleVInputChange}
            value={values.V}
            name="V"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          W:
          <input
            className="alphabet-input"
            onChange={handleWInputChange}
            value={values.W}
            name="W"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          X:
          <input
            className="alphabet-input"
            onChange={handleXInputChange}
            value={values.X}
            name="X"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          Y:
          <input
            className="alphabet-input"
            onChange={handleYInputChange}
            value={values.Y}
            name="Y"
            placeholder="0"
            type="number"
          />
        </label>

        <label className="alphabet-label">
          Z:
          <input
            className="alphabet-input"
            onChange={handleZInputChange}
            value={values.Z}
            name="Z"
            placeholder="0"
            type="number"
          />
        </label>

        <button type="submit">Submit</button>
        <>{console.log(values)}</>
      </form>
      {submitted ? (
        <div>You successfully Submitted! Number of A's = {values.A}</div>
      ) : (
        <> </>
      )}
    </>
  );
}

export default AlphabetForm;
