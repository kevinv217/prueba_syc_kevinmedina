import React from "react";
// import _ from "lodash";

const InputText = ({ id, label, placeholder, error, register, setEmail }) => {
  // console.log(onChange);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...register}
        id={id}
        className={"form-control inputform"}
        placeholder={placeholder}
        type={"email"}
        // onChange={(e) => {
        //   console.log(e.target.value);
        //   setEmail(e.target.value);
        // }}
      />
      {<p className="pt-1 m-0 lpSmsErrorLogin">{error.name?.message}</p>}
    </>
  );
};

export default InputText;

// onChange={(e) => setName(e.target.value)}
