import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState } from "react";

const Proyectos = () => {
  const [showp1, setShowProyecto1] = useState(false);
  const [showp2, setShowProyecto2] = useState(false);
  const [showp3, setShowProyecto3] = useState(false);
  const [showp4, setShowProyecto4] = useState(false);
  const [showp5, setShowProyecto5] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        ml: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: 800,
          mt: 3,
          
        }}
      >
        
          <Button
            variant="text"
            onClick={() => setShowProyecto1((prev) => !prev)}
          >
            <Typography
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "inter",
                fontWeight: 600,
                fontSize: "20px",
                
              }}
            >
              Portfolio ADA
            </Typography>
          </Button>
        
        {showp1 && (
          <Card
            sx={{
              bgcolor: "#d3d3d3",
              width: "600px",
              height: 200,
              ml: 16
            }}
          >
            <CardContent>
              <Typography sx={{color: "#404040", fontSize: "20px",  fontFamily: "inter", fontWeight: 500,}}>Preview del Proyecto</Typography>
              <Typography sx={{}}>Resumen del proyecto</Typography>
              <CardActions>link</CardActions>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: 700,
          mt: 6,
        }}
      >
        <Button onClick={() => setShowProyecto2((prev) => !prev)}>
          <Typography>Generador de Memes</Typography>
        </Button>
        {showp2 && (
          <Card>
            <CardContent>
              <Typography>Preview del Proyecto</Typography>
              <Typography>Resumen del proyecto</Typography>
              <CardActions>link</CardActions>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 6,
          maxWidth: 700,
        }}
      >
        <Button onClick={() => setShowProyecto3((prev) => !prev)}>
          <Typography>Ahorradas</Typography>
        </Button>
        {showp3 && (
          <Card>
            <CardContent>
              <Typography>Preview del Proyecto</Typography>
              <Typography>Resumen del proyecto</Typography>
              <CardActions>link</CardActions>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 6,
          maxWidth: 700,
        }}
      >
        <Button
          variant="text"
          onClick={() => setShowProyecto4((prev) => !prev)}
        >
          <Typography>Buscador de Personajes</Typography>
        </Button>
        {showp4 && (
          <Card>
            <CardContent>
              <Typography>Preview del Proyecto</Typography>
              <Typography>Resumen del proyecto</Typography>
              <CardActions>link</CardActions>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 6,
          maxWidth: 700,
        }}
      >
        <Button
          variant="text"
          onClick={() => setShowProyecto5((prev) => !prev)}
        >
          <Typography>Buscador de Peliculas</Typography>
        </Button>
        {showp5 && (
          <Card>
            <CardContent>
              <Typography>Preview del Proyecto</Typography>
              <Typography>Resumen del proyecto</Typography>
              <CardActions>link</CardActions>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default Proyectos;
