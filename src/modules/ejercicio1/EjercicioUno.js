import React, { useState } from "react";

import Formulario from "./Formulario";
import Tablas from "./Tablas";

export default function EjercicioUno() {
  const [datosClientes, setDatosClientes] = useState([
    {
      numberDocument: 1001203151,
      name: "kevin medina",
      address: "cra 22 #153-40",
      idEnvoice: "01",
      codeState: "activo",
      valueEnvoice: "120.000",
      fecha: new Date(),
      description: "Vigente",
    },
  ]);

  const removeDatosClientes = (index) => {
    const newDatosClientes = datosClientes.filter((datoCliente, idx) => {
      return idx !== index;
    });
    setDatosClientes(newDatosClientes);
  };

  return (
    <>
      <div className="row w-100 m-0">
        <div className="col-md-12">
          <div className="row m-auto justify-content-around py-4 viewsFormulario">
            <div className="col-md-4 viewFormChilds ">
              <Formulario setDatosClientes={setDatosClientes} />
            </div>
            <div className="col-md-7 viewFormChilds2 mt-1">
              <Tablas
                removeDatosClientes={removeDatosClientes}
                datosClientes={datosClientes}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
