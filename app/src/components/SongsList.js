import React from 'react'
import { List, ListItem, ListItemText, Card, CardHeader, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        background: "white"
    }
}));


const SongsList = ({ avatar, title, songs, msgEmpty, updateSelectedSong }) => {

    const classes = useStyle();

    const onClick = e => {
        const name = e.target.innerText;
        updateSelectedSong(name);
    }

    return (
        <Card>
            <CardHeader
                className={classes.cardHeader}
                avatar={avatar}
                title={title}
            />
            <Divider />
            <List className={classes.root} dense={true} >
                {songs.length === 0 ? <Typography align="center" variant="subtitle2" gutterBottom>{msgEmpty}</Typography> :
                    (songs.map((song) => (
                        <ListItem key={song.replace(/ +/g, '')}>
                            <ListItemText
                                primary={song}
                                onClick={onClick}
                            />
                        </ListItem>
                    )))}
            </List>
        </Card >
    );
}

export default SongsList


