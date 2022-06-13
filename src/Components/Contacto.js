import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contacto = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", m: 4, height: 380 }}>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography
            sx={{ fontFamily: "inter", fontSize: "32px", fontWeight: 600 }}
          >
            Contactame
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "17px",
              color: "#929292",
              fontWeight: 600,
            }}
          >
            hablemos en cuanto a tu proyecto
          </Typography>
          <Typography
            sx={{
              mt: 10,
              fontFamily: "inter",
              fontSize: "40px",
              fontWeight: 600,
            }}
          >
            correo@correo
          </Typography>
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "left", ml: -2 }}
          >
            <IconButton
              href="https://www.linkedin.com/in/zuri-h-ruiz-b7255a149/"
              target="_blank"
              sx={{ color: "black" }}
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              href="https://github.com/ZuriRuiz"
              target="_blank"
              sx={{ color: "black" }}
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contacto;
