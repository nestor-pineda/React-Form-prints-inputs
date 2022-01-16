import React, { useState } from "react";
import "./Form.scss";

const INITIAL_STATE = {
  name: "",
  address: "",
  location: "",
  image: "",
};

const Form = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    const { name, address, location, image } = state;

    if (!name || !address || !location || !image) {
      console.log("Debes rellenar todos los campos");
      return;
    }

    console.log(state);
    props.addProfile(state);
    setState(INITIAL_STATE);
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <input type="text" name="name" value={state.name} onChange={handleInput} placeholder="Name" />

        <input type="text" name="address" value={state.address} onChange={handleInput} placeholder="Surname" />

        <input type="text" name="location" value={state.location} onChange={handleInput} placeholder="Location" />

        <input type="text" name="image" value={state.image} onChange={handleInput} placeholder="Image" />

        <div style={{ padding: "20px" }}>{state.image ? <img src={state.image} alt={state.name} width="200px" /> : null}</div>

        <div>
          <button type="submit">Guardar Perfil</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
