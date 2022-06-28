import React, { useState } from "react";

import _ from "lodash";
import datosImagenesMosaico from "./datosImagenesMosaico";

export default function MosaicoImagenes() {
  const [imagen, setImagen] = useState([]);

  const newimg = _.map(imagen, (...img) => img[0].image);

  // console.log(newimg);

  return (
    <>
      <div className="row w-100 m-0">
        {React.Children.toArray(
          _.map(datosImagenesMosaico, (datos, id) => {
            const escogerImg = datosImagenesMosaico.filter((dato, idx) => {
              return idx === id;
            });

            return (
              <>
                <div className="col-md-4 col-sm-6 p-1" key={id}>
                  <img
                    className="py-2 p-0 btn"
                    src={`${datos.image}`}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setImagen(escogerImg)}
                  />
                </div>
              </>
            );
          })
        )}
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Visualizar imagen
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                className="py-2 p-0 btn"
                src={newimg}
                alt=""
                width={"100%"}
                height={"100%"}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
