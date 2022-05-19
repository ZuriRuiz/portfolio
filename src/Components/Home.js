import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
          }}
        >
          <Button variant="text" sx={{ color: "black", textTransform: "none", fontFamily: "Inter", fontStyle: 'normal', fontWeight: 'normal'}}>
            ¿Quién soy?
          </Button>
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Skills & lenguaje
          </Button>
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Proyectos
          </Button>
          <Button variant="text" sx={{ color: "black", textTransform: "none" }}>
            Contactame
          </Button>
        </Toolbar>
      </AppBar>

      <Box>
        <Card
          elevation={0}
          sx={{ display: "flex", flexDirection: "column", mt: "180px", ml: 6 }}
        >
          <CardContent>
            <Typography>Hola! Soy Zuri H. Ruiz</Typography>
            <Typography>
              Front end Developer, fanática de la música y el cine.
            </Typography>
          </CardContent>
          
            <CardActions disableSpacing>
              <IconButton sx={{color: "black"}}>
                <LinkedInIcon  sx={{ fontSize: 30 }}/>
              </IconButton>
              <IconButton sx={{color: "black"}}>
                <GitHubIcon sx={{ fontSize: 30 }}/>
              </IconButton>
            </CardActions>
          
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
