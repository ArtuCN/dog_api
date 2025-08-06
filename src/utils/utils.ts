import type { Breed } from '../models/breeds';

export const findBreedById = (id: string, breeds: Breed[]): Breed | undefined => {
  return breeds.find((breed) => breed.id === id);
};
