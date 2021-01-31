import React, { useState, useEffect } from 'react'
import SongsList from './SongsList'
import { Button, TextField, Typography, Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getSongs from '../http/getSongs'
import SearchIcon from '@material-ui/icons/Search';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const useStyle = makeStyles((theme) => ({
    input: {
        width: "100%",
    }
}));

const AddSong = ({ setFilteredSongs }) => {

    const classes = useStyle();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue.length > 0) {
            getSongs(inputValue)
                .then(songs => setFilteredSongs(songs))
                .catch(err => setFilteredSongs([]));
        } else
            setFilteredSongs([])
    }, [inputValue]);


    const onChange = e => {
        const input = e.target.value.replace(/ +/g, ' ');
        setInputValue(input);
    }

    return (<TextField className={classes.input} id="outlined-basic" variant="outlined" label="Search song ..." onChange={onChange} value={inputValue} type='text' />)
}


export default AddSong