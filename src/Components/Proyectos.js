import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions'
import Button from "@mui/material/Button";
import { useState } from "react";


const Proyectos = () => {
    const [showp1, setShowProyecto1] = useState(false);
    const [showp2, setShowProyecto2] = useState(false);
    const [showp3, setShowProyecto3] = useState(false);
    const [showp4, setShowProyecto4] = useState(false);
    const [showp5, setShowProyecto5] = useState(false);

    return (
        <Box sx={{display: "flex", flexDirection: "column" }}>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", maxWidth: 700}}>
                <Button onClick={() => setShowProyecto1(prev => !prev)}>Portfolio ADA</Button>
                {showp1 && <Card>
                    <CardContent>
                        <Typography>Preview del Proyecto</Typography>
                        <Typography>Resumen del proyecto</Typography>
                        <CardActions>link</CardActions>
                    </CardContent>
                </Card>
                }
            </Box>

            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", mt: 2,  maxWidth: 700}}>
            <Button onClick={() => setShowProyecto2(prev => !prev)}>Generador de Memes</Button>
            {showp2 && <Card>
                    <CardContent>
                        <Typography>Preview del Proyecto</Typography>
                        <Typography>Resumen del proyecto</Typography>
                        <CardActions>link</CardActions>
                    </CardContent>
                </Card>
                }
            </Box>

            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", mt:2,  maxWidth: 700}}>
            <Button onClick={() => setShowProyecto3(prev => !prev)}>Ahorradas</Button>
            {showp3 && <Card>
                    <CardContent>
                        <Typography>Preview del Proyecto</Typography>
                        <Typography>Resumen del proyecto</Typography>
                        <CardActions>link</CardActions>
                    </CardContent>
                </Card>
                }
            </Box>

            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", mt:2 ,  maxWidth: 700}}>
            <Button onClick={() => setShowProyecto4(prev => !prev)}>Buscador de Personajes</Button>
            {showp4 && <Card>
                    <CardContent>
                        <Typography>Preview del Proyecto</Typography>
                        <Typography>Resumen del proyecto</Typography>
                        <CardActions>link</CardActions>
                    </CardContent>
                </Card>
                }
            </Box>

            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", mt:2 ,  maxWidth: 700}}>
            <Button onClick={() => setShowProyecto5(prev => !prev)}>buscador de Peliculas</Button>
            {showp5 && <Card>
                    <CardContent>
                        <Typography>Preview del Proyecto</Typography>
                        <Typography>Resumen del proyecto</Typography>
                        <CardActions>link</CardActions>
                    </CardContent>
                </Card>
                }
            </Box>
        </Box>
    )
}

export default Proyectos;