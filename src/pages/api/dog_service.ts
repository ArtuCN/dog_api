const server_url = 'https://dogapi.dog/api/v2';
import type { Breed, BreedsResponse } from '@/models/breeds';
import type { NextApiRequest, NextApiResponse } from 'next'



async function callBreeds(page: number) {
  
  const response = await fetch(server_url + '/breeds?page[number]=' + page);
  const data = await response.json();

  const res = data.data as BreedsResponse[];
  res.forEach((breed) => {
    console.log(breed);
  });
  return res;
}

export async function getFacts() {
  const response = await fetch(server_url + '/facts')
  const data = await response.json();
  return data;
}

export async function getBreeds(page: number)
{
  const data = await callBreeds(page);
  const res = data as unknown as Breed[];

  return res;
}


export async function getBreedById(id: string)
{
  const data = await fetch(server_url + '/breed/' + id);
  const res = data as unknown as Breed;

  return res;
}