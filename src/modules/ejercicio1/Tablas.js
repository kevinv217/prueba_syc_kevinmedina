import React from "react";

import { format } from "date-fns";

// import _ from "lodash";

export default function Tablas({
  datosClientes,
  setShowAddFactura,
  removeDatosClientes,
}) {
  return (
    <>
      <table className="table table-striped">
        <thead className="bg-primary">
          <tr>
            <th scope="col">Fecha_Factura</th>
            <th scope="col">Nombre</th>
            <th scope="col">Valor_Factura</th>
            <th scope="col">Descripción</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {datosClientes.map((dato, index) => {
            return (
              <tr className="p-4" key={index}>
                <td>{format(dato.fecha, "MMM d yyyy")}</td>
                <td>{dato.name}</td>
                <td>${dato.valueEnvoice}</td>
                <td>{dato.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeDatosClientes(index)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
