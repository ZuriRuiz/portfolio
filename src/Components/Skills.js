import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HTML5 from "../img/HTML5.png";
import CSS3 from "../img/CSS3.png";
import SASS from "../img/SASS.png";
import GIT from "../img/GIT.png";
import JS from "../img/JS.png";
import REACT from "../img/REACT.png";



const Skills = () => {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", m: 3 }}
    >
      <Card sx={{ width: 320, height: 220, m: 1}}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2 }}
            image={HTML5}
            alt="logo HTML"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2
            }}
          >
            HTML5
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{  width: 320, height: 220, m: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2}}
            image={CSS3}
            alt="logo CSS"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2,
            }}
          >
            CSS3
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{  width: 320, height: 220, m: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2 }}
            image={SASS}
            alt="logo SASS"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2,
            }}
          >
            SASS
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ width: 320, height: 220, m: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2 }}
            image={GIT}
            alt="logo GIT"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2,
            }}
          >
            GIT
          </Typography>
        </CardContent>
      </Card>


      <Card sx={{ width: 320, height: 220, m: 1 }}>
      <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2 }}
            image={JS}
            alt="logo JS"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2,
            }}
          >
            JavaScript
          </Typography>
        </CardContent>
      </Card>


      <Card sx={{width: 320, height: 220, m: 1 }}>
      <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, mt: 2 }}
            image={REACT}
            alt="logo REACT"
          ></CardMedia>
          <Typography
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 500,
              mt: 2,
            }}
          >
            REACT
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Skills;
