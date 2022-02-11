import axios from "axios";
import { environment } from "environment";

export const getMusicians = async (musician) => {
  console.log(musician);
  return await axios.get(`${environment.api_url}/musician`, {
    params: {
      staksId: musician.staksId,
      genre: musician.genre,
      location: musician.location,
      artistName: musician.artistName,
    },
  });
};

export const updateMusician = async (musician) => {
  console.log(musician);
  return await axios.post(`${environment.api_url}/musician`, musician);
};

export const getMusicianMembers = async (musicianId) => {
  console.log(musicianId);
  return await axios.get(
    `${environment.api_url}/musician/${musicianId}/members`
  );
};

export const addMusicianMembers = async (musicianId, memberId) => {
  console.log(musicianId);
  return await axios.get(
    `${environment.api_url}/musician/${musicianId}/members/${memberId}`
  );
};
