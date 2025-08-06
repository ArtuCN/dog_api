const server_url = 'https://dogapi.dog/api/v2';

import type { NextApiRequest, NextApiResponse } from 'next'
export async function getBreeds()
{
    const response = await fetch(`${server_url}/breeds`);
    if (!response.ok) {
        throw new Error("Failed to fetch breeds");
    }


    return response.json().then(data => data.breeds.map((breed: any) => ({
        id: breed.id
    })));
}


 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,

  
  res: NextApiResponse<ResponseData>
) {
  const breeds = await getBreeds();
  res.status(200).json(breeds);
}