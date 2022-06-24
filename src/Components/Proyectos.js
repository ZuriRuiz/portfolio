import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import CardProyectos from "./CardProyectos";

const Proyectos = () => {
  const [proyectoAMostrar, setProyectoAMostrar] = useState("");
  const [mostrarBoton, setMostrarBoton] = useState(null);

  const mostrarProyecto = (proyecto, boton) => {
    console.log("hola");
    setProyectoAMostrar(proyecto);
    setMostrarBoton(boton === mostrarBoton ? null : boton);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        ml: 3,
        mt: 5,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },

            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
          }}
          onClick={() => mostrarProyecto("proyecto1", "boton1")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton1"}
        >
          Porfolio ADA
        </Button>

        {proyectoAMostrar === "proyecto1" && (
          <Box
            sx={{
              ml: 50,
              position: "fixed",
              top: 95,
            }}
          >
            <CardProyectos
              titulo="Portfolio ADA"
              previewProyecto="Este es el primer proyecto del curso de ADA ITW. El enfoque del proyecto es crear un portfolio que sirva para que todo aquel que tenga acceso vea los proyectos logrados en todo el curso. Se creó con HTML y CSS"
              linkProyecto="https://porfoliozuri.netlify.app/"
            />
          </Box>
        )}

        <Button
          sx={{
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
            display: {
              md: "none",
            },
          }}
          target="_blank"
          href="https://porfoliozuri.netlify.app/"
        >
          Porfolio ADA 
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
          }}
          onClick={() => mostrarProyecto("proyecto2", "boton2")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton2"}
        >
          Generador de Memes
        </Button>
        {proyectoAMostrar === "proyecto2" && (
          <Box sx={{ ml: 50, position: "fixed", top: 95 }}>
            <CardProyectos
              titulo="Generador de Memes"
              previewProyecto="En este Proyecto realicé un editor para generar memes, creé una aplicación donde se puede manipular el texto y una imagen de preferencia. Para lograr esto usé JavaScript para modificar dinámicamente su contenido y sus propiedades y completada la edición se pueda descargar y compartir. Se usó HTML y CSS de igual forma para el maquetado y el estilado de la aplicación"
              linkProyecto="https://generadordememesdezuri.netlify.app"
            />
          </Box>
        )}

        <Button
          sx={{
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
            display: {
              md: "none",
            },
          }}
          target="_blank"
          href="https://generadordememesdezuri.netlify.app"
        >
          Generador de Memes 
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
          }}
          onClick={() => mostrarProyecto("proyecto3", "boton3")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton3"}
        >
          Proyecto AhorrADAs
        </Button>
        {proyectoAMostrar === "proyecto3" && (
          <Box sx={{ ml: 50, position: "fixed", top: 95 }}>
            <CardProyectos
              titulo="Proyecto AhorrADAs"
              previewProyecto="En este proyecto creé una aplicación que permite llevar un registro de los gastos realizados y de los ingresos obtenidos. Apliqué lo aprendido para estructurar y almacenar la información compleja de la aplicación y desarrollé funcionalidades que posibilitan manipular y realizar operaciones esenciales a la hora de trabajar con datos. Este Proyecto es un trabajo en grupo."
              linkProyecto="https://github.com/sandramuraca/AhorrADAs"
            />
          </Box>
        )}

        <Button
          sx={{
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
            display: {
              md: "none",
            },
          }}
          target="_blank"
          href="https://github.com/sandramuraca/AhorrADAs"
        >
          Proyecto AhorrADAs 
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
          }}
          onClick={() => mostrarProyecto("proyecto4", "boton4")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton4"}
        >
          Buscador de Personajes
        </Button>
        {proyectoAMostrar === "proyecto4" && (
          <Box sx={{ ml: 50, position: "fixed", top: 95 }}>
            <CardProyectos
              titulo="Buscador de Personajes"
              previewProyecto="En este proyecto creé una aplicación que permite listar información sobre cualquier tema de interés, comunicándome con una API pública. Para esto elegí la API de Rick and Morty, una API REST con datos reales, haciendo consultas a la misma pasándole distintos parámetros que permiten personalizar la búsqueda y mostrar los datos obtenidos como respuesta."
              linkProyecto="https://rickandmorty-browser.netlify.app"
            />
          </Box>
        )}

        <Button
          sx={{
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
            display: {
              md: "none",
            },
          }}
          target="_blank"
          href="https://rickandmorty-browser.netlify.app"
        >
          Buscador de Personajes 
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
          }}
          onClick={() => mostrarProyecto("proyecto5", "boton5")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton5"}
        >
          Buscador de Peliculas
        </Button>
        {proyectoAMostrar === "proyecto5" && (
          <Box sx={{ ml: 50, position: "fixed", top: 95 }}>
            <CardProyectos
              titulo="Buscador de Peliculas"
              previewProyecto="En este proyecto creé una aplicación con REACT que permite conectarse a una API pública de películas y mostrar los estrenos, películas populares, mejor puntuadas y películas de interés en general. Se logró organizar la información de la API en distintos elementos de la página según lo requerido por el usuario usando librerías de rutas y librerías de componentes como MUI."
              linkProyecto="https://buscadordepeliszuri.netlify.app"
            />
          </Box>
        )}

        <Button
          sx={{
            textTransform: "none",
            fontFamily: "inter",
            fontSize: "18px",
            fontWeight: 600,
            color: "black",
            ":hover": {
              color: "green",
            },
            display: {
              md: "none",
            },
          }}
          target="_blank"
          href="https://buscadordepeliszuri.netlify.app"
        >
         Buscador de Peliculas 
        </Button>
      </Box>
    </Box>
  );
};

export default Proyectos;
