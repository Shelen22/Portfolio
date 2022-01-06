import styles from "./tech.module.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    paper: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    padding: "10px 20px",
    boxShadow: "0 2px 5px 1px rgb(64 60 67 / 16%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    '&:hover': {
      transform: "translateY(-7px)",
      transition:"transform .4s",
      boxShadow: "2px 2px 4px 1px black"
      
    },
    '& p': {
      marginTop:"8px"
    }
  },
  iconButton: {
    '&:hover': {
      background:"none"
    }
  }
}));

export const Technologies = ({ data, title }) => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <Grid container="true" className={styles.grid} spacing={2} justifyContent="center" >
        {data.map((el) => (
          <Grid xs={6} sm={4} md={3} item key={el.id}>
            <IconButton className={classes.iconButton}>
              <div className={classes.paper}>
                <img src={el.image} alt="" />
                <p>{el.name}</p>
              </div>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
