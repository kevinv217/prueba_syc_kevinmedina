import React, { useState } from "react";

import DatePicker from "react-date-picker";
// import Tablas from "./Tablas";
import InputText from "../inputs/InputText";
import InputSelect from "../inputs/InputSelect";

export default function Formulario({ setDatosClientes, setShowAddFactura }) {
  const [numDocument, setNumDocument] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [idInvoice, setIdEnvoices] = useState("");
  const [codeState, setCodeState] = useState("");
  const [valueEnvoice, setValueEnvoice] = useState("");
  const typesDescription = ["VIGENTE", "PAGADA", "VENCIDA"];
  const [description, setDescription] = useState("VIGENTE");
  const [fecha, setFecha] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    const datoCliente = {
      numberDocument: numDocument,
      name: name,
      address: address,
      idInvoice: idInvoice,
      codeState: codeState,
      valueEnvoice: valueEnvoice,
      fecha: fecha,
      description: description,
    };

    setDatosClientes((currentState) => [...currentState, datoCliente]);
  };

  return (
    <>
      <form
        className="row w-100 m-0"
        action="../../conexion_BD/conexion.php"
        method="post"
        onSubmit={onSubmit}
      >
        <div className="col-md-12">
          <InputText
            name={"numberDocument"}
            value={name}
            label={"Numero de documento"}
            placeholder={"Escriba su numero de documento"}
            required={true}
            setName={setName}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <InputText
            name={"name"}
            label={"Nombre"}
            placeholder={"Escriba su nombre"}
            // required={true}
            value={numDocument}
            setName={setNumDocument}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <InputText
            name={"address"}
            label={"Dirección"}
            placeholder={"Escriba si dirección"}
            value={address}
            setName={setAddress}
            required={true}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <InputText
            name={"idEnvoice"}
            label={"ID de factura"}
            placeholder={"Escriba su id de factura"}
            value={idInvoice}
            setName={setIdEnvoices}
            required={true}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <InputText
            name={"codeState"}
            label={"Codigo de estado"}
            placeholder={"Escribir Activo o Inactivo"}
            value={codeState}
            setName={setCodeState}
            required={true}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <InputText
            name={"valueEnvoice"}
            label={"Valor de factura"}
            placeholder={"Escriba su valor de factura"}
            value={valueEnvoice}
            setName={setValueEnvoice}
            required={true}
            // error={errors}
          />
        </div>
        <div className="col-md-12">
          <label>Fecha factura</label>
          <DatePicker
            name="date"
            className={"form-control"}
            selected={fecha}
            onChange={(date) => setFecha(date)}
          />
        </div>
        <div className="col-md-12">
          <InputSelect
            name={"description"}
            label={"Descripción"}
            valor={description}
            required={true}
            types={typesDescription}
            setModule={setDescription}
          />
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary mt-2">
            Enviar solicitud
          </button>
        </div>
      </form>
    </>
  );
}
