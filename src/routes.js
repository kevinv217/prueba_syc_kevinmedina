import { Redirect } from "react-router-dom";

import EjercicioUno from "./modules/ejercicio1/EjercicioUno";
import MosaicoImagenes from "./modules/ejercicio2/MosaicoImagenes";

const datosRoutes = [
  {
    id: 0,
    path: "/ejercicio1",
    exact: true,
    component: EjercicioUno,
  },
  {
    id: 1,
    path: "/ejercicio2",
    exact: true,
    component: MosaicoImagenes,
  },
  {
    id: 2,
    path: "/",
    exact: true,
    component: () => <Redirect to="/ejercicio1" />,
  },
];

export default datosRoutes;
