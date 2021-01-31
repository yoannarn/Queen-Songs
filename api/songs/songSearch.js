import { allSongs } from './songs';

export function songSearch(text, songs = allSongs) {

    const input = formatStr(text);

    const filteredSongs = input.length > 0 ? songs.filter(
        song => formatStr(song).includes(input.trim())
    ) : [];

    return filteredSongs;
}

/** express always converts params to str so not necessary to handle number cases */
const formatStr = str => str.toLowerCase().replace(/ +/g, '');
