'use client';

import { useEffect, useState } from 'react';
import { getBreeds } from '../api/dog_service';

export default function BreedsPage() {
  const [breeds, setBreeds] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBreeds()
      .then(setBreeds)
      .catch(() => setError(true));
  }, []);

  if (error) return <p>Error loading breeds</p>;

  return (
    <>
      <h1>Dog Breeds</h1>
      <ul>
        {breeds.map((breed) => {
          console.log("breed", breed);
          return (
            <li key={breed.id}>{breed.name}</li>
          );
        })}
      </ul>
    </>
  );
}
