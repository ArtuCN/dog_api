import React from 'react';
import { Card, Button } from 'antd';
import type { BreedAttributes } from '@/models/breeds';
import { formatMinMax } from '@/utils/utils';

import { Descriptions, Modal, Tag } from 'antd';


type BreedCardProps = {
  breed: BreedAttributes;
  index: string;
};
const BreedCard: React.FC<BreedCardProps> = ({ breed, index }) => {
  console.log("breed = ", breed, " ", index);


  return (
    <Card
      title={breed.name}
      style={{ width: 400, backgroundColor: 'transparent' }}
    >
      <Descriptions bordered column={1} size="small">
        <Descriptions.Item label="Name">{breed.name}</Descriptions.Item>
        <Descriptions.Item label="Description">{breed.description}</Descriptions.Item>
        <Descriptions.Item label="Female weight">{formatMinMax(breed.female_weight) + " kg"}</Descriptions.Item>
        <Descriptions.Item label="Male weight">{formatMinMax(breed.male_weight) + " kg"}</Descriptions.Item>
        <Descriptions.Item label="Life expectancy">{formatMinMax(breed.life) + " years"}</Descriptions.Item>
        <Descriptions.Item label="Hypoallergenic">
          {breed.hypoallergenic ? <Tag color="green">Yes</Tag> : <Tag color="red">No</Tag>}
        </Descriptions.Item>
      </Descriptions>
      

    </Card>
  );
};

export default BreedCard;