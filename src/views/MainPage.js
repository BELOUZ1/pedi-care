import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'


function MainPage() {


    const VILLES = process.env.REACT_APP_VILLES.split(",");
    const SPECIALITES = process.env.REACT_APP_SPECIALITES.split(",");

    return (
        <div style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}>
            <h3 style={{ color: "#80b3ff" }}>Trouvez un rendez-vous</h3>
            <Form style={{
                display: 'flex',
                width: 700
            }} >

                <Form.Group >
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={SPECIALITES}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Spécialité" />}
                    />
                </Form.Group>

                <Form.Group style={{ marginLeft: 2 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={VILLES}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Ville" />}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginLeft: 10 }}>
                    Rechercher
                </Button>
            </Form>

            <Grid container columnSpacing={15} style={{ marginTop: 50 }}>
                <Grid item xs={3} style={{ width: 245 }}>
                    <Card variant="outlined" >
                        <CardMedia
                            sx={{ height: 200 }}
                            image={logo4}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Blogs
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Que vous soyez à la maison, dans les transports ou au bureau,
                                les bactéries pathogènes sont partout. Utiliser un produit
                                désinfectant est une manière pratique et...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Lire plus</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{ width: 245 }}>
                    <Card variant="outlined" >
                        <CardContent>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={logo2}
                                title="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                Boutique en ligne
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Que vous soyez à la maison, dans les transports ou au bureau,
                                les bactéries pathogènes sont partout. Utiliser un produit
                                désinfectant est une manière pratique et...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Aller à la boutique</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{ width: 245 }}>
                    <Card variant="outlined" >
                        <CardContent>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={logo3}
                                title="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                Rendez vous
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Que vous soyez à la maison, dans les transports ou au bureau,
                                les bactéries pathogènes sont partout. Utiliser un produit
                                désinfectant est une manière pratique et...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/rdvs">
                                <Button size="small">Prendre un rendez vous</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3} style={{ width: 245 }}>
                    <Card variant="outlined" >
                        <CardContent>
                            <CardMedia
                                sx={{ height: 200 }}
                                image={logo1}
                                title="green iguana"
                            />
                            <Typography gutterBottom variant="h5" component="div">
                                Nutritions
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Que vous soyez à la maison, dans les transports ou au bureau,
                                les bactéries pathogènes sont partout. Utiliser un produit
                                désinfectant est une manière pratique et...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Lire plus</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        </div>

    );
}

export default MainPage;