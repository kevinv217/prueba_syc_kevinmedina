import React from "react";
import _ from "lodash";

export default function InputSelect({
  name,
  label,
  valor,
  setModule,
  types,
  error,
}) {
  return (
    <>
      {/* {label ? <label htmlFor={label}>{label}</label> : ""} */}
      <label htmlFor={''}>{label}</label>

      <select
        className="form-control form-select"
        value={valor}
        required={true}
        onChange={(e) => setModule(e.target.value)}
      >
        {_.map(types, (mod, index) => {
          return (
            <option key={index} value={mod}>
              {mod}
            </option>
          );
        })}
      </select>
      {/* {<p className="pt-1 m-0 lpSmsErrorLogin">{error.name?.message}</p>} */}
    </>
  );
}
