import React from "react";

const InputCheckbox = ({ register, error }) => {
  console.log(register, error);
  return (
    <>
      <input
        {...register}
        // id={id}
        type={"checkbox"}
        className={"form-check-input me-0 float-none"}
        // checked={false}
      />
      <span className="form-check-label ps-2" htmlFor="exampleCheck1">
        Aceptar terminos y condiciones de privacidad en el usuario
      </span>
      <p className="pt-1 m-0 lpSmsErrorLogin">{error.checkar?.message}</p>
    </>
  );
};

export default InputCheckbox;
