'use client';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { getBreeds, getBreedById } from '../api/dog_service';
import type { Breed, BreedAttributes } from '@/models/breeds';
import BreedCard from '../../components/breed_card';
import { findBreedById } from '@/utils/utils';


export default function BreedsPage() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Breed | null>(null);
  const [visible, setVisible] = useState(false);
  const showDetails = async (id: string) => {
    setVisible(true);
    try {
      const breed = findBreedById(id, breeds);
      if (breed)
        setSelected(breed);
      throw error;
    } catch (err) {
      console.error('Failed to fetch breed details:', err);
    }
  };

  useEffect(() => {
    if (page >= 30)
      setPage(1);
    getBreeds(page)
      .then((data) => {
        setBreeds(data);
      })
      .catch((err) => {
        setError(true);
        console.error("error: ", err);
      });
  }, [page]);

  if (error) return <p>Error loading breeds</p>;

  return (
    <>
      <div style={{ textAlign: 'center', fontSize: 40}}>

        <Button
          type="text"
          style={{ fontSize: 32 }}
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <LeftOutlined />
        </Button>

        <span style={{ fontSize: 40, margin: '0 10px' }}>{page}</span>

        <Button
          type="text"
          style={{ fontSize: 32 }}
          onClick={() => setPage(page + 1)}
        >
          <RightOutlined />
        </Button>

      </div>
      <div className='breeds'>
        <div style={{
          
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          justifyItems: 'center',
        }}>
        {breeds.map((breed) => (
          <Card
            key={breed.id}
            title={breed.attributes.name}
            style={{ width: 600, height: 300, backgroundColor: 'lightblue' }}
            >
            <Button style={{padding:20}} onClick={() => showDetails(breed.id)}>Details</Button>
            <div style={{paddingTop:10, textAlign:'left', fontSize: '18px'}}>

              {breed.attributes.description}
            </div>
          </Card>
        ))}
        </div>
        <div>
        <Modal
          open={visible}
          onCancel={() => setVisible(false)}
          footer={false}
          closable={true}
          style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1001,
                width: 400,
            }}
        >
          <Card style={{ backgroundColor: 'transparent' }}>
            {selected ? (
              <BreedCard breed={selected.attributes} index={selected.id} />
            ) : (
              <p>Loading...</p>
            )}
          </Card>
        </Modal>
        </div>
      </div>
    </>
  );
}
