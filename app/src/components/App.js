import React, { useState, useEffect } from 'react'
import SongsList from './SongsList'
import { Button, TextField, Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getSongs from '../http/getSongs'
import SearchIcon from '@material-ui/icons/Search';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddSong from './AddSong'


const useStyle = makeStyles((theme) => ({
  button: {
    textAlign: 'center',
  },
  mainContainer: {
    backgroundColor: "#f5f5f5",
    width: "960px",
    minHeight: "100vh",
    margin: "15px auto",
    padding: "12px",
  },
}));

const App = (props) => {

  const classes = useStyle();

  const [selectedSongs, setSelectedSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const updateSelectedSong = (song) => {
    if (selectedSongs.includes(song))
      setSelectedSongs(selectedSongs.filter(selectedSong => selectedSong !== song));
    else
      setSelectedSongs([...selectedSongs, song]);
  }

  const displaySongs = () => {
    alert(selectedSongs.join(", "));
  }

  return (
    <Container className={classes.mainContainer} maxWidth="sm">
      <Typography align="center" variant="h2" component="h1" color="primary" gutterBottom>Queen Songs</Typography>

      <Grid container spacing={8} direction="row">

        <Grid item xs={12}>
          <AddSong setFilteredSongs={setFilteredSongs} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SongsList avatar={<SearchIcon />} title="Songs" songs={filteredSongs} msgEmpty="No found" updateSelectedSong={updateSelectedSong} />
        </Grid>


        <Grid item xs={12} sm={6}>
          <SongsList avatar={<PlaylistAddCheckIcon />} title="Playlist" songs={selectedSongs} msgEmpty="No sound" updateSelectedSong={updateSelectedSong} />
        </Grid>

        <Grid container justify="center" item xs={12}  >
          <Button variant="contained" color="primary" size="large" onClick={displaySongs}>Validate</Button>
        </Grid>

      </Grid>

    </Container>
  );

}


export default App;
