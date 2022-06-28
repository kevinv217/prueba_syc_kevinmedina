import React, { useState, useEffect } from "react";
import _ from "lodash";

const InputText = ({
  id,
  label,
  name,
  placeholder,
  error,
  required,
  value,
  setName,
}) => {
  const fieldlabel = required ? `${label} *` : label;
  const [valido, setValido] = useState({ clase: "", message: "" });

  return (
    <>
      {label ? <label htmlFor={name}>{fieldlabel}</label> : ""}

      <input
        // {...register}
        value={value}
        id={id}
        className={`form-control inputform ${valido.clase}`}
        placeholder={placeholder}
        type="text"
        required={required}
        // onInvalid={(e) => e.target.setCustomValidity("Inserte el dato requerido")}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />
      {/* {<p className="pt-1 m-0 lpSmsErrorLogin">{error.name?.message}</p>} */}
    </>
  );
};

export default InputText;

// onChange={(e) => setName(e.target.value)}
