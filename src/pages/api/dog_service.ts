const server_url = 'https://dogapi.dog/api/v2';
import type { Breed, BreedsResponse } from '@/models/breeds';
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Group } from '@/models/groups';


async function callBreeds(page: number) {
  
  const response = await fetch(server_url + '/breeds?page[number]=' + page);
  const data = await response.json();

  const res = data.data as BreedsResponse[];
  res.forEach((breed) => {
    console.log(breed);
  });
  return res;
}

async function callGroups() {
  const response = await fetch( server_url + '/groups' );
  const data = await response.json();

  const res = data.data as Group[];
  console.log(res);
  return res;
}


export async function getGroups() {
  const response = await callGroups();
  const res = response as Group[];
  console.log("response ", res);
  return res;
}


export async function getFacts(): Promise<string> {
  const response = await fetch(server_url + '/facts');
  const data = await response.json();

  const fact = data?.data?.[0]?.attributes?.body ?? 'No fact available';
  
  return fact;
}


export async function getBreeds(page: number)
{
  const data = await callBreeds(page);
  const res = data as unknown as Breed[];
  return res;
}


export async function getBreedById(id: string) {
  const data = await fetch(server_url + '/breeds/' + id);
  const res = data as unknown as Breed;

  return res;
}
