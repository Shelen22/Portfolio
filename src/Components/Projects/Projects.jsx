import React from "react";
import styles from "./projects.module.css"
// import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    '& h1': {
      color: '#CC4865',
      fontSize: "35px",
      textAlign: "center",
      backgroundColor: "white"
    }
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // border:"solid blue 1px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // border:"solid red",
  },
  cardMedia: {
    // border:"solid red",
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    border: "solid white",
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  gitHub: {
    marginRight: theme.spacing(1)
  },
  demo: {
    marginRight: theme.spacing(1),
    fill: "white"
  },
  cardActions: {
    justifyContent:"space-around"
  }
}));


export const Projects = () => {
  const classes = useStyles();
  return (
    <div id="projects" className={styles.projects}>
            <h1>Projects</h1>
      <CssBaseline />
      <main>
        {/* <div className={classes.heroContent}>
          <Container maxWidth="sm">
          </Container>
        </div> */}
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {projects.map((item) => (
              
              <Grid item key={item.id} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.descrip}
                    </Typography>
                    <div className={styles.techContainer}>
                      {item.techs.map((item,i) => (
                        <div key={i}> <img src={item} alt="" /></div>
                      ))}
                    </div>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button onClick={() => { window.open(item.demolink) }} size="small" variant="contained" color="primary">
                      <VisibilityIcon className={classes.demo} />
                      <Typography color="secondary">
                        Demo
                      </Typography>
                    </Button>
                    <Button onClick={() => { window.open(item.gitHub) }} size="small" variant="outlined" color="primary">
                      <GitHubIcon className={classes.gitHub} />
                      <Typography >
                        CODE
                      </Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const projects = [
  {
    title: "IndiaMART",
    image: "./Indiamart.png",
    descrip: "It is an Indian E-commerce web application that provides customer to customer & business to business sales service via its web portal.",
    gitHub: "https://github.com/Upsehu/India-Mart",
    demolink: "https://upsehu.github.io/India-Mart/",
    techs: ["./javascript.png","./html.png" , "./css.png"],
    id :"1"
  },
  {
    title: "Lynda.com",
    image: "./Lynda.png",
    descrip: "A web application for learning and an online course provider for software, creative, and business skills, taught by industry experts",
    gitHub: "https://github.com/Gautam-8/FW_12_Project_lynda",
    demolink: "https://gautam-8.github.io/FW_12_Project_lynda/html/index.html",
    techs: ["./javascript.png","./html.png" , "./css.png","./nodejs.png","./expressjs.png","./mongodb.png"],
    id :"2"
  },
  {
    title: "Movie Search Engine",
    image: "./Movie.png",
    descrip: "You can Search any Movie and get all information about that moive. ",
    gitHub: "https://github.com/Shelen22/Movie-signup",
    demolink: "https://shelen22.github.io/Movie-signup/",
    techs: ["./html.png" , "./css.png","./javascript.png"],
    id :"3"
  }
]