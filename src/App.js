import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css';
import Contenido from "./layout/Contenido";
import routes from "./routes";

export default function App() {
  let Menu = (
    <Router>
      <Contenido>
        {React.Children.toArray(
          _.map(routes, (route, index) => {
            return (
              <>
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              </>
            );
          })
        )}
      </Contenido>
    </Router>
  );

  return Menu;
}
