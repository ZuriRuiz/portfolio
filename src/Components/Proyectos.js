import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
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
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3, mt: 5 }}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
          }}
          onClick={() => mostrarProyecto("proyecto1", "boton1")}
          disabled={mostrarBoton !== null && mostrarBoton !== "boton1"}
        >
          Porfolio ADA
        </Button>

        {proyectoAMostrar === "proyecto1" && (
          <Box sx={{ ml: 50, position: "fixed", top: 95 }}>
            
            <CardProyectos
              titulo="Portfolio ADA"
              previewProyecto="Este es el primer proyecto del curso de ADA ITW. El enfoque del proyecto es crear un portfolio que sirva para que todo aquel que tenga acceso vea los proyectos logrados en todo el curso. Se creo con HTML y CSS"
              linkProyecto="https://porfoliozuri.netlify.app/"
            />
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              previewProyecto="En este Proyecto realice un editor para generar memes, cree una aplicacion donde se puede manipular el texto y la imagen de un meme. Para lograr esto use JavaScript para modificar dinámicamente su contenido y sus propiedades y completada la edicion se pueda descargar y compartir
              el primer proyecto del curso de ADA ITW. El enfoque del proyecto es crear un portfolio que sirva para que todo aquel que tenga acceso vea los proyectos logrados en todo el curso. Se creo con HTML y CSS"
              linkProyecto="https://generadordememesdezuri.netlify.app"
            />
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              previewProyecto="En este proyecto cree una aplicacion que permite llevar un registro de los gastos realizados y de los ingresos obtenidos. Aplique lo aprendido para estructurar y almacenar la información compleja de la aplicacion y desarrolle funcionalidades que posibilitan manipular y realizar operaciones esenciales a la hora de trabajar con datos. Este Proyecto es un trabajo en grupo"
              linkProyecto="https://github.com/sandramuraca/AhorrADAs"
            />
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              previewProyecto="En este proyecto cree una aplicacion que permite listar informacion sobre cualquier tema de interes, comunicandome con una API publica. Para esto utilice la API de Rick and Morty, utilizando una API REST con datos reales, haciendo consultas a la misma pasandole distintos parametros que permiten personalizar la búsqueda y mostrar los datos obtenidos como respuesta"
              linkProyecto="https://rickandmorty-browser.netlify.app"
            />
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
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
              previewProyecto="En este proyecto cree una aplicacion con REACT que permite conectarse a una API de películas y mostrar los estrenos, peliculas populares y mejor puntadas."
              linkProyecto="https://buscadordepeliszuri.netlify.app"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Proyectos;
