import { FilterProps } from '@/types';
import fetch from 'node-fetch';

export async function fetchCars(filters : FilterProps) {
  const {manufacturer, year, fuel, limit, model} = filters;

  const headers = {
    'x-rapidapi-key': 'c278b5d052msh70e7ce5703d3e09p1c91d9jsnca74b968f474',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`, {headers: headers});
  
  const result = await response.json();

  return result;
};