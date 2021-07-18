import axios from 'axios';
import md5 from 'md5';
import {PUBLIC_KEY, PRIVATE_KEY} from '@env';

const HOST = 'https://gateway.marvel.com/v1/public';

export const api = axios.create({baseURL: HOST});

export const getCharacters = name => {
  console.log('test');
  return new Promise((resolve, reject) => {
    let ts = new Date().getTime();
    const hash = getHash(ts);
    api
      .get(
        `/characters?nameStartsWith=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`,
      )
      .then(({data}) => {
        resolve(data.data.results);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};

export const getHash = ts => {
  let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
  return hash;
};
