import React from "react";
// import _ from "lodash";

const InputNumber = ({ id, label, placeholder, error, register, required }) => {
  const fieldlabel = required ? `${label} *` : label;

  return (
    <>
      {label ? <label htmlFor={register}>{fieldlabel}</label> : ""}
      <input
        {...register}
        id={id}
        className={"form-control inputform"}
        placeholder={placeholder}
        type={"number"}
        // onChange={(e) => {
        //   console.log(e.target.value);
        //   setPhone(e.target.value);
        // }}
      />
      {<p className="pt-1 m-0 lpSmsErrorLogin">{error.name?.message}</p>}
    </>
  );
};

export default InputNumber;

// onChange={(e) => setName(e.target.value)}
