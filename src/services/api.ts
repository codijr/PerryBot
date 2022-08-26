import axios from "axios";

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org',
})

export const loremIpsumApi = axios.create({
  baseURL: 'https://loripsum.net/api',
})