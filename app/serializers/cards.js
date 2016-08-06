import { Serializer } from 'lux-framework';

class CardsSerializer extends Serializer {
  attributes = [
    'code',
    'createdAt',
    'updatedAt'
  ];

  hasMany = [
    'messages'
  ];
}

export default CardsSerializer;
