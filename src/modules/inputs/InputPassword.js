import React from "react";

const InputPassword = ({ id, label, name, placeholder, error, register }) => {
  // console.log(error);

  return (
    <>
      {register.name === "" ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <input
          {...register}
          id={"passwordLogin"}
          className={"inputform"}
          placeholder={placeholder}
          type={"password"}
        />
      )}
      {<p className="pt-1 m-0 lpSmsErrorLogin">{error.password?.message}</p>}
    </>
  );
};

export default InputPassword;

//         // {...inputprops}
// onChange={(e) => setName(e.target.value)}
