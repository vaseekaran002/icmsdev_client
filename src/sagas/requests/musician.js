import axios from 'axios';

export const getMusicians = async (musician) => {
    console.log(musician);
    return await axios.get("http://18.205.56.216:90/api/musician", {
        params: {
            staksId: musician.staksId,
            genre: musician.genre,
            location: musician.location,
            artistName: musician.artistName
        }
      });
}

export const updateMusician = async (musician) => {
    console.log(musician);
    return await axios.post("http://18.205.56.216:90/api/musician", musician);
}

export const getMusicianMembers = async (musicianId) => {
    console.log(musicianId);
    return await axios.get(`http://18.205.56.216:90/api/musician/${musicianId}/members`);
}

export const addMusicianMembers = async (musicianId, memberId) => {
    console.log(musicianId);
    return await axios.get(`http://18.205.56.216:90/api/musician/${musicianId}/members/${memberId}`);
}