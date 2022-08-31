import axios from "axios";

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org',
})

export const loremIpsumApi = axios.create({
  baseURL: 'https://loripsum.net/api',
})

export const yesNoApi = axios.create({
  baseURL: 'https://yesno.wtf/api',
})