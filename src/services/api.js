import axios from 'axios';
import md5 from 'md5';
import {PUBLIC_KEY, PRIVATE_KEY} from '@env';

const HOST = 'https://gateway.marvel.com/v1/public';

export const api = axios.create({baseURL: HOST});

let cacheGetCharacters = {};
let cacheGetCharacterComics = {};

export const getCharacters = name => {
  return new Promise((resolve, reject) => {
    if (cacheGetCharacters[name]) {
      resolve(cacheGetCharacters[name]);
    } else {
      let ts = new Date().getTime();
      const hash = getHash(ts);
      api
        .get(
          `/characters?nameStartsWith=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
        )
        .then(({data}) => {
          cacheGetCharacters[name] = data.data.results;
          resolve(data.data.results);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    }
  });
};
export const getCharacterComics = id => {
  return new Promise((resolve, reject) => {
    if (cacheGetCharacterComics[id]) {
      resolve(cacheGetCharacterComics[id]);
    } else {
      let ts = new Date().getTime();
      const hash = getHash(ts);
      api
        .get(
          `/characters/${id.toString()}/comics?&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
        )
        .then(({data}) => {
          cacheGetCharacterComics[id] = data.data.results;
          resolve(data.data.results);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    }
  });
};

export const getHash = ts => {
  let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  return hash;
};
