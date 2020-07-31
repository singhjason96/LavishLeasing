import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import firebase from "./Firebase";
import GradientBackground from "./GradientBackground";


const useStyles = makeStyles((theme) => ({
  backgroundStyle: {
    height: '100vh',
    padding: '32px'
  },
  textStyle: {
    fontFamily: "Roboto Slab, serif",
  },
}));

const GalleryAdd = () => {
  const classes = useStyles();
  const [image, setImage] = useState(null)


  const handleChange = (e) => {
    if(e.target.files[0]){
      setImage(e.target.files[0])

    }
  }

  var storage = firebase.storage()

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url)
        })
      }
    )
  }

  console.log("image", image)
  

  return (
   <GradientBackground >
     <Typography variant="h2" align="center" className={classes.textStyle}>Add To The Gallery</Typography>
     <Container className={classes.backgroundStyle} align="center">
     <form>
      <input type="file" name="image"  onChange={handleChange} />
      <Button
        variant="contained"
        className={classes.buttonStyle}
        onClick={handleUpload}
      >
        Submit
      </Button>
    </form>
     </Container>
   </GradientBackground>
  );
};

export default GalleryAdd;
