type MinMax = {
  min: number;
  max: number;
};

type BreedAttributes = {
  name: string;
  description: string;
  life: MinMax;
  male_weight: MinMax;
  female_weight: MinMax;
  hypoallergenic: boolean;
};

type BreedRelationships = {
  group: {
    data: {
      id: string;
      type: string;
    };
  };
};

export type Breed = {
  id: string;
  type: 'breed';
  attributes: BreedAttributes;
  relationships: BreedRelationships;
};

export type BreedsResponse = {
  data: Breed[];
  meta: {
    pagination: {
      current: number;
      next?: number;
      last: number;
      records: number;
    };
  };
  links: {
    self: string;
    current: string;
    next?: string;
    last: string;
  };
};
