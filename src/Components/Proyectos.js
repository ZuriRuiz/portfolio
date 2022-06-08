import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import CardProyectos from "./CardProyectos";

const Proyectos = () => {
  const [proyecto, setProyecto] = useState(false);
  const [proyecto2, setProyecto2] = useState(false);
  const [proyecto3, setProyecto3] = useState(false);
  const [proyecto4, setProyecto4] = useState(false);
  const [proyecto5, setProyecto5] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Box>
        <List sx={{ display: "flex" }}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              ":hover": {
                
                color: "#929292"
              },
            }}
            onClick={() => setProyecto(!proyecto)}
          >
            Portfolio ADA
          </Button>


          {proyecto && (
            <ListItem
              sx={{ display: "flex", justifyContent: "space-evenly", ml: 6 }}
            >
              <Divider orientation="vertical" variant="middle" flexItem />
              <CardProyectos
                titulo="Portfolio ADA"
                previewProyecto="Este es el primer proyecto del curso de ADA ITW. El enfoque del proyecto es crear un portfolio que sirva para que todo aquel que tenga acceso vea los proyectos logrados en todo el curso. Se creo con HTML y CSS"
                linkProyecto="https://porfoliozuri.netlify.app/"
              />
            </ListItem>
          )}
        </List>
      </Box>

      <Box>
        <List sx={{ display: "flex" }}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              ":hover": {
                color: "#929292"
              },
            }}
            onClick={() => setProyecto2(!proyecto2)}
          >
            Generador de Memes
          </Button>

          {proyecto2 && (
            <ListItem sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Divider orientation="vertical" variant="middle" flexItem />
              <CardProyectos
                titulo="Generador de Memes"
                previewProyecto="En este Proyecto realice un editor para generar memes, cree una aplicacion donde se puede manipular el texto y la imagen de un meme. Para lograr esto use JavaScript para modificar dinámicamente su contenido y sus propiedades y completada la edicion se pueda descargar y compartir."
                linkProyecto="https://generadordememesdezuri.netlify.app"
              />
            </ListItem>
          )}
        </List>
      </Box>

      <Box>
        <List sx={{ display: "flex" }}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              ":hover": {
                color: "#929292"
              },
            }}
            onClick={() => setProyecto3(!proyecto3)}
          >
            Proyecto AhorrADAs
          </Button>
          {proyecto3 && (
            <ListItem sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Divider orientation="vertical" variant="middle" flexItem />
              <CardProyectos
                titulo="Proyecto AhorrADAs"
                previewProyecto="En este proyecto cree una aplicacion que permite llevar un registro de los gastos realizados y de los ingresos obtenidos. Aplique lo aprendido para estructurar y almacenar la información compleja de la aplicacion y desarrolle funcionalidades que posibilitan manipular y realizar operaciones esenciales a la hora de trabajar con datos. Este Proyecto es un trabajo en grupo"
                linkProyecto="https://generadordememesdezuri.netlify.app"
              />
            </ListItem>
          )}
        </List>
      </Box>

      <Box>
        <List sx={{ display: "flex" }}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              ":hover": {
                color: "#929292"
              },
            }}
            onClick={() => setProyecto4(!proyecto4)}
          >
            Buscador de Personajes
          </Button>
          {proyecto4 && (
            <ListItem
              sx={{ display: "flex", justifyContent: "space-evenly", ml: -3 }}
            >
              <Divider orientation="vertical" variant="middle" flexItem />
              <CardProyectos
                titulo="Buscador de Personajes"
                previewProyecto="En este proyecto cree una aplicacion que permite listar informacion sobre cualquier tema de interes, comunicandome con una API publica. Para esto utilice la API de Rick and Morty, utilizando una API REST con datos reales, haciendo consultas a la misma pasandole distintos parametros que permiten personalizar la búsqueda y mostrar los datos obtenidos como respuesta"
                linkProyecto="https://rickandmorty-browser.netlify.app"
              />
            </ListItem>
          )}
        </List>
      </Box>

      <Box>
        <List sx={{ display: "flex" }}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 600,
              color: "black",
              ":hover": {
                color: "#929292"
              },
            }}
            onClick={() => setProyecto5(!proyecto5)}
          >
            Buscador de Peliculas
          </Button>
          {proyecto5 && (
            <ListItem
              sx={{ display: "flex", justifyContent: "space-evenly", ml: -1 }}
            >
              <Divider orientation="vertical" variant="middle" flexItem />
              <CardProyectos
                titulo="Buscador de Peliculas"
                previewProyecto="En este proyecto cree una aplicacion con REACT que permite conectarse a una API de películas y mostrar los estrenos, peliculas populares y mejor puntadas."
                linkProyecto="https://buscadordepeliszuri.netlify.app"
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Proyectos;
