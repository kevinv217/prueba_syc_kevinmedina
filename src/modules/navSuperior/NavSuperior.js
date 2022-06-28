import React from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import dataNavSuperior from "./dataNavSuperior";

export default function NavSuperior() {
  return (
    <>
      <nav className="navbar navbar-expand-md navsuperior col-md-12">
        <div className="row w-100">
          <div className="col-md-2 col-sm-2 p-0 ps-4">
            <a className="navbar-brand" href="/">
              <img
                src="https://res.cloudinary.com/dtguzyae4/image/upload/v1656382824/logo_pestana_wbzh8k.png"
                alt=""
                style={{ width: "30%" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
          <div
            className="col-md-10 col-sm-10 collapse navbar-collapse p-0"
            id="navbarTogglerDemo03"
          >
            <div className="row w-100 m-0 justify-content-end">
              <ul className="col-md-6 navbar-nav m-0 p-0 d-flex align-items-center justify-content-evenly position-relative">
                {React.Children.toArray(
                  _.map(dataNavSuperior, (dato) => {
                    return (
                      <li key={dato.id}>
                        <NavLink to={dato.url} className="position-relative">
                          <span>{dato.name}</span>
                        </NavLink>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
