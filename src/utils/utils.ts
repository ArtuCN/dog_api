import type { Breed, MinMax } from '../models/breeds';
import type { Group } from '@/models/groups';
export const findBreedById = (id: string, breeds: Breed[]): Breed | undefined => {
  return breeds.find((breed) => breed.id === id);
};

export const findGroupById = (id: string, groups: Group[]): Group | undefined => {
  return groups.find((group) => group.id === id);
}

export function formatMinMax(range: MinMax): string {
  return `${range.min} - ${range.max}`;
}