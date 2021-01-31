import axios from 'axios';

const getSongs = async (songName) => {
    const { data } = await axios.get(`http://localhost:8081/${songName}`);
    return data;
}

export default getSongs;