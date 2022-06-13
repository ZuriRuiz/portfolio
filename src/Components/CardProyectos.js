import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";



const CardProyectos = (props) => {
  
  return (
    <Box>
    
        <Card sx={{ width: 600, height: 400, bgcolor: "black", color: "white" }}>
          <CardContent>
            <Typography sx={{fontFamily: "inter",}}>{props.titulo}</Typography>
            <Typography sx={{fontFamily: "inter",  mt: 2}}>{props.previewProyecto}</Typography>
            <CardActions sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <Button sx= {{fontFamily: "inter", color: "black", bgcolor: "#929292", mt: 3}} variant="contained" href={props.linkProyecto} target="_blank">Link</Button>
            </CardActions>
          </CardContent>
        </Card>  
    </Box>  
      
      
    
  );
};

export default CardProyectos;
