'use client';
import { Button, Card, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { getBreeds, getBreedById } from '../api/dog_service';
import type {Breed, BreedsResponse} from '@/models/breeds'


export default function BreedsPage() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Breed | null>(null);
  const [visible, setVisible] = useState(false);

  
  const showDetails = async (id : string) => {
    setVisible(true);
    const breed = await getBreedById(id);
    console.log(breed)
    

  useEffect(() => {
    getBreeds(page)
      .then((data) => {
        setBreeds(data); 
        console.log("all breeds: ", data);
      })
      .catch((err) => {
        setError(true);
        console.error("error: ", err);
      });
  }, [page]);

  if (error) return <p>Error loading breeds</p>;

  return (
      <div className='breeds'>
        <div style={{ marginTop: 20, display: 'flex', gap: 10}}>
          <Button type="text" disabled={page === 1} onClick={() => setPage(page - 1)}>{"⬅️"}</Button>
          <span>{page}</span>
          <Button type="text" onClick={() => setPage(page + 1)}>{"➡️"}</Button>
        </div>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          justifyItems: 'center',
        }}>
          {breeds.map((breed) => (
            <Card
              key={breed.id}
              title={breed.attributes.name}
              style={{ width: 400, backgroundColor: 'lightblue' }}>
              {<Button onClick={() => showDetails(breed.id)}>Details</Button>}
            </Card>
              
          ))}

        </div>
          <Modal
          onCancel={() => setVisible(false)}
          footer={<Button onClick={() => setVisible(false)}>Chiudi</Button>}
          open = {visible && !!selected}
          >
            <Card>
              {selected ? (
                <div>
                  <h2>{selected.id}</h2>
                  {/* <p>{selected.attributes.name}</p> */}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </Card>
          </Modal>
      </div>
  );
}
