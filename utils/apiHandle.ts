import { FilterProps } from '@/types';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchCars(filters : FilterProps) {
  const {manufacturer, year, fuel, limit, model} = filters;
  if (!process.env.API_KEY) {
    throw new Error('Missing API_KEY in environment variables');
  }
  
  const headers = {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`, {headers: headers});
  
  const result = await response.json();

  return result;
};