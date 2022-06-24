import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import bit2 from "../img/bit2.jpg";

const Home = () => {
  return (
    <Box>
      <Box>
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "180px",
            ml: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              mt:{
               xs: -3,
               
              }
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontFamily: "inter",

                  fontWeight: 600,
                  fontSize: {
                    xs: "25px",
                    sm: "30px",
                    md: "40px",
                  },
                }}
              >
                Hola! Soy Zuri H. Ruiz
              </Typography>
              <Typography
                sx={{
                  fontFamily: "inter",
                  fontSize: "18px",
                  color: "#929292",
                  fontWeight: 500,
                }}
              >
                Front End Developer, fanática de la música y el cine.
              </Typography>

              <CardActions
                disableSpacing
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  ml: -2,
                  
                  
                }}
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

            <CardMedia
              component="img"
              image={bit2}
              sx={{
                width: {
                  xs: 340,
                  sm: 350,
                  md: 500,
                },

                ml: {
                  xs: -6,
                  sm: 13,
                  md: 10,
                },

                mt: {
                  xs: 3
                },

                
              }}
            />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
